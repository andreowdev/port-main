import axios from 'axios';
import querystring from 'querystring';
import base64 from 'base-64'; 
const { encode: base64Encode } = base64;

const clientId = 'd1b51e49ea534c6b95297061b2df9a0a';          
const clientSecret = '305f6f2747b340ae90673c1bf4965f98';  
const refreshToken = 'AQBheDwme7nl2YVvMtYaJ0JFK32ihQXdtZW7hYeDs9f3FEG6KFeAg7memizvO3s22CZWF67lPgfS0Jv805QZt1YTcuByoMYrBkpKaJfjR1CD5e655gacvAo2yasO4UyItu4';   

let accessToken = 'AQDASqXNegTUoVwzR5rnqbWAilS6BQFEBv8aqqugYmoxws8X98gBIdmoSGwsugZDCN3OkFrCwbdmqpcAguQmphGbj65mEMNM_Pkvv5YOLABUo4a9BLdzOLNFzVk1qezzIsI_voXVg9a0wlJgkqJOppRoqSbf9uKTklJGXlXJdjDjHqIyI7KK1ghuLt6ZXA-tpzWwAkT1';       

const refreshAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  
  const data = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  };

  const headers = {
    Authorization: 'Basic ' + base64Encode(`${clientId}:${clientSecret}`),
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const response = await axios.post(tokenUrl, querystring.stringify(data), { headers });
    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Erro ao renovar o token de acesso:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const getLastPlayedTrack = async () => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200 && response.data.items.length > 0) {
      const lastTrack = response.data.items[0].track; 
      return {
        name: lastTrack.name,
        artists: lastTrack.artists.map(artist => artist.name).join(', '),
        album: lastTrack.album.name,
        albumImage: lastTrack.album.images[0].url,
        playedAt: response.data.items[0].played_at, 
      };
    } else {
      return { message: 'Nenhuma música foi reproduzida recentemente.' };
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Token expirado, tentando obter um novo...');
      try {
        await refreshAccessToken();  
        return await getLastPlayedTrack(); 
      } catch (refreshError) {
        console.error('Erro ao tentar renovar o token e buscar a última música tocada:', refreshError);
      }
    } else {
      console.error('Erro ao obter a última música tocada:', error.response ? error.response.data : error.message);
    }
  }
}
export const getCurrentlyPlaying = async () => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200 && response.data.item) {
      const track = response.data.item;
      return {
        name: track.name,
        artists: track.artists.map(artist => artist.name).join(', '),
        album: track.album.name,
        albumImage: track.album.images[0].url,
        progress: response.data.progress_ms, // Progresso atual em milissegundos
        duration: track.duration_ms // Duração total em milissegundos
      };
    } else if (response.status === 204) {
      return { message: 'Nenhuma música está sendo reproduzida no momento.' };
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Token expirado, tentando obter um novo...');
      try {
        await refreshAccessToken();  
        return await getCurrentlyPlaying(); 
      } catch (refreshError) {
        console.error('Erro ao tentar renovar o token e buscar a música atual:', refreshError);
      }
    } else {
      console.error('Erro ao obter a música atual:', error.response ? error.response.data : error.message);
    }
  }
};
