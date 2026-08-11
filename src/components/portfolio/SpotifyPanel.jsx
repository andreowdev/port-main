import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpRight, Disc3 } from "lucide-react";
import { getCurrentlyPlaying, getLastPlayedTrack } from "../hooks/useSpotify.js";

const REFRESH_INTERVAL = 20000;

function formatPlayedAt(playedAt) {
  if (!playedAt) {
    return null;
  }

  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(playedAt));
  } catch {
    return null;
  }
}

export default function SpotifyPanel({ copy }) {
  const [track, setTrack] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const fetchTrack = async () => {
      setStatus((currentStatus) => (currentStatus === "ready" ? currentStatus : "loading"));

      let trackData = await getCurrentlyPlaying();

      if (!trackData || trackData.message) {
        trackData = await getLastPlayedTrack();
      }

      if (!isMounted) {
        return;
      }

      setTrack(trackData);
      setStatus(trackData?.message ? "error" : "ready");
    };

    fetchTrack();
    const intervalId = window.setInterval(fetchTrack, REFRESH_INTERVAL);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const playedAtLabel = useMemo(() => formatPlayedAt(track?.playedAt), [track?.playedAt]);

  return (
    <div className="aqua-panel spotify-window">
      <div className="aqua-window-title">
        <span>{copy.titleAccent} {copy.titleRest}</span>
        <a href={copy.profileHref} target="_blank" rel="noreferrer">
          spotify <ArrowUpRight size={12} />
        </a>
      </div>

      <div className="spotify-window-body">
        <div className="spotify-window-copy">
          <span>{copy.label}</span>
          <p>{copy.description}</p>
        </div>

        {status === "loading" ? (
          <div className="spotify-track">
            <div className="spotify-cover animate-pulse bg-[var(--line)]" />
            <div className="space-y-3">
              <div className="h-3 w-24 animate-pulse bg-[var(--line)]" />
              <div className="h-6 w-2/3 animate-pulse bg-[var(--line)]" />
              <div className="h-4 w-1/2 animate-pulse bg-[var(--line)]" />
              <div className="h-4 w-3/4 animate-pulse bg-[var(--line)]" />
            </div>
          </div>
        ) : status === "error" || !track ? (
          <div className="spotify-empty">
            <span>
              <Disc3 size={14} />
              spotify
            </span>
            <p>{track?.message || copy.fallbackMessage}</p>
          </div>
        ) : (
          <div className="spotify-track">
            <div className="spotify-cover">
              {track.albumImage ? (
                <img
                  src={track.albumImage}
                  alt={`${track.album} cover`}
                  className="aspect-square h-full w-full object-cover"
                />
              ) : (
                <div>
                  <Disc3 size={24} />
                </div>
              )}
            </div>

            <div className="spotify-track-info">
              <div className="spotify-status-row">
                <span
                  className={[
                    "spotify-status",
                    track.status === "playing"
                      ? "spotify-status-playing"
                      : "",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "spotify-dot",
                      track.status === "playing" ? "spotify-dot-playing" : "",
                    ].join(" ")}
                  />
                  {track.status === "playing" ? copy.playingLabel : copy.recentLabel}
                </span>

                {playedAtLabel && track.status !== "playing" ? (
                  <span className="spotify-played-at">
                    {copy.playedAtPrefix} {playedAtLabel}
                  </span>
                ) : null}
              </div>

              <h4>{track.name}</h4>
              <p>{track.artists}</p>
              <small>{track.album}</small>

              <div className="spotify-actions">
                {track.externalUrl ? (
                  <a
                    href={track.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.trackLinkLabel}
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}

                <a
                  href={copy.profileHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.profileLabel}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SpotifyPanel.propTypes = {
  copy: PropTypes.shape({
    description: PropTypes.string.isRequired,
    fallbackMessage: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    playedAtPrefix: PropTypes.string.isRequired,
    playingLabel: PropTypes.string.isRequired,
    profileHref: PropTypes.string.isRequired,
    profileLabel: PropTypes.string.isRequired,
    recentLabel: PropTypes.string.isRequired,
    titleAccent: PropTypes.string.isRequired,
    titleRest: PropTypes.string.isRequired,
    trackLinkLabel: PropTypes.string.isRequired,
  }).isRequired,
};
