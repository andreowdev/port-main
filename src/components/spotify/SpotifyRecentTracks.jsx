import React, { useState, useEffect } from 'react';
import { getCurrentlyPlaying } from '../hooks/useSpotify.js';
import { FaPlay, FaPause, FaBackward, FaForward, FaVolumeUp } from 'react-icons/fa'; // Ícones para controles

const CurrentlyPlaying = () => {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true); // Estado para simular play/pause

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const trackData = await getCurrentlyPlaying();
        setTrack(trackData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 5000);
    return () => clearInterval(interval); 
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (error) {
    return (
      <div className="p-4 text-red-700 rounded-md shadow-md">
        Erro: {error}
      </div>
    );
  }

  if (!track) {
    return (
      <div className="p-4 text-gray-700 rounded-md shadow-md">
        Carregando...
      </div>
    );
  }

  const progressInSeconds = Math.floor(track.progress / 1000);
  const durationInSeconds = Math.floor(track.duration / 1000);
  const progressPercentage = (progressInSeconds / durationInSeconds) * 100;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h1 className="font-mono text-white text-lg ">
        O que estou escutando no meu{' '}
        <a
          href="https://open.spotify.com/user/lyixkn1qhupjuexfkygpbzmnd"
          className="text-green-500 hover:underline"
        >
          Spotify
        </a>
      </h1>
      {track.message ? (
        <div className="text-center text-white">{track.message}</div>
      ) : (
        <div className="flex items-center">
          <img
            src={track.albumImage}
            alt="Álbum"
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="ml-2 flex-1 text-white">
            <h2 className="text-xl font-semibold mb-1">{track.name}</h2>
            <p className="text-sm mb-2">Artista(s): {track.artists}</p>
            <p className="text-sm">Álbum: {track.album}</p>
          </div>
        </div>
      )}
      <div className="relative h-2 py-1 mt-4 rounded-full bg-gray-600">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-green-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
