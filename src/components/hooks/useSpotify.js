import axios from "axios";
import { encode as base64Encode } from "base-64";

const clientId = "d1b51e49ea534c6b95297061b2df9a0a";
const clientSecret = "305f6f2747b340ae90673c1bf4965f98";
const refreshToken =
  "AQBheDwme7nl2YVvMtYaJ0JFK32ihQXdtZW7hYeDs9f3FEG6KFeAg7memizvO3s22CZWF67lPgfS0Jv805QZt1YTcuByoMYrBkpKaJfjR1CD5e655gacvAo2yasO4UyItu4";

let accessToken = null;

const getAuthHeaders = () => ({
  Authorization: `Bearer ${accessToken}`,
});

const normalizeTrack = (track, extra = {}) => ({
  album: track.album.name,
  albumImage: track.album.images[0]?.url || "",
  artists: track.artists.map((artist) => artist.name).join(", "),
  duration: track.duration_ms || 0,
  externalUrl: track.external_urls?.spotify || "",
  name: track.name,
  ...extra,
});

const refreshAccessToken = async () => {
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const data = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
  const basicAuth = base64Encode(`${clientId}:${clientSecret}`);

  try {
    const response = await axios.post(tokenUrl, data.toString(), {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh Spotify access token:", error.response?.data || error.message);
    throw error;
  }
};

const ensureToken = async () => {
  if (!accessToken) {
    await refreshAccessToken();
  }
};

export const getLastPlayedTrack = async () => {
  await ensureToken();

  try {
    const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: getAuthHeaders(),
    });

    if (response.status === 200 && response.data.items.length > 0) {
      const item = response.data.items[0];

      return normalizeTrack(item.track, {
        playedAt: item.played_at,
        status: "recent",
      });
    }

    return { message: "No track found in recent history." };
  } catch (error) {
    if (error.response?.status === 401) {
      await refreshAccessToken();
      return getLastPlayedTrack();
    }

    console.error("Failed to fetch recently played track:", error.response?.data || error.message);
    return { message: "Unable to load Spotify activity right now." };
  }
};

export const getCurrentlyPlaying = async () => {
  await ensureToken();

  try {
    const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: getAuthHeaders(),
    });

    if (response.status === 200 && response.data.item) {
      return normalizeTrack(response.data.item, {
        progress: response.data.progress_ms || 0,
        status: "playing",
      });
    }

    if (response.status === 204) {
      return { message: "Nothing is playing right now." };
    }

    return { message: "Nothing is playing right now." };
  } catch (error) {
    if (error.response?.status === 401) {
      await refreshAccessToken();
      return getCurrentlyPlaying();
    }

    console.error("Failed to fetch current Spotify track:", error.response?.data || error.message);
    return { message: "Unable to load Spotify activity right now." };
  }
};
