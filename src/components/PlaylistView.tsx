"use client";

import Image from "next/image";
import { Clock, Play } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import { playlist, type Track } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function PlaylistView() {
  const { playTrack, currentTrack, isPlaying } = usePlayer();
  const playlistHeroImage = PlaceHolderImages.find(p => p.id === 'playlist-hero');


  const handleTrackClick = (track: Track) => {
    playTrack(track);
  };

  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <div className="flex items-center space-x-4 mb-8">
        {playlistHeroImage && (
          <Image
            src={playlistHeroImage.imageUrl}
            width={200}
            height={200}
            alt="Playlist cover"
            className="rounded-lg shadow-lg"
            data-ai-hint={playlistHeroImage.imageHint}
          />
        )}
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase">Playlist</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter">
            Chill Vibes
          </h1>
          <p className="text-muted-foreground">
            Kick back and relax with these calming tunes.
          </p>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Album</TableHead>
            <TableHead className="text-right">
              <Clock className="h-4 w-4 inline-block" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {playlist.map((track, index) => (
            <TableRow
              key={track.id}
              className={`group cursor-pointer ${
                currentTrack?.id === track.id
                  ? "bg-card/80 text-primary"
                  : "hover:bg-card/50"
              }`}
              onClick={() => handleTrackClick(track)}
            >
              <TableCell className="relative">
                <span className="group-hover:hidden">{index + 1}</span>
                <Button variant="ghost" size="icon" className="absolute inset-0 h-full w-full hidden group-hover:flex items-center justify-center">
                  <Play className="h-5 w-5 fill-primary text-primary" />
                </Button>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-4">
                  <Image
                    src={track.albumArtUrl}
                    width={40}
                    height={40}
                    alt={track.album}
                    className="rounded"
                    data-ai-hint={track.albumArtHint}
                  />
                  <div>
                    <div className="truncate">{track.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {track.artist}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {track.album}
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {track.duration}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
