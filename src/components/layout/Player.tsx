"use client";

import Image from "next/image";
import {
  Heart,
  Maximize2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";

import { usePlayer } from "@/contexts/PlayerContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Visualizer from "../Visualizer";

const Player = () => {
  const { currentTrack, isPlaying, togglePlayPause } = usePlayer();

  if (!currentTrack) {
    return (
      <footer className="h-[90px] bg-card border-t border-border px-6 flex items-center justify-center">
        <p className="text-muted-foreground">No song selected</p>
      </footer>
    );
  }

  return (
    <footer className="h-[90px] bg-card border-t border-border px-6">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4 w-1/4">
          <Image
            src={currentTrack.albumArtUrl}
            width={56}
            height={56}
            alt={currentTrack.album}
            className="rounded"
            data-ai-hint={currentTrack.albumArtHint}
          />
          <div>
            <p className="font-semibold truncate">{currentTrack.title}</p>
            <p className="text-sm text-muted-foreground truncate">
              {currentTrack.artist}
            </p>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 max-w-2xl flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 rounded-full"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-primary-foreground" />
              ) : (
                <Play className="h-5 w-5 fill-primary-foreground" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-muted-foreground">0:00</span>
            <Slider defaultValue={[33]} max={100} step={1} />
            <span className="text-xs text-muted-foreground">{currentTrack.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/4">
          <Visualizer isPlaying={isPlaying} />
          <Button variant="ghost" size="icon">
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Player;
