"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Track } from '@/lib/data';
import { playlist } from '@/lib/data';

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  togglePlayPause: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = useCallback((track: Track) => {
    // If it's the same track, toggle play/pause, otherwise start the new track
    if (currentTrack?.id === track.id) {
      setIsPlaying(prev => !prev);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const togglePlayPause = useCallback(() => {
    if (currentTrack) {
      setIsPlaying(prev => !prev);
    }
  }, [currentTrack]);

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlayPause }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
