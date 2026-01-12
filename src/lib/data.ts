import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  albumArtUrl: string;
  albumArtHint: string;
}

const getAlbumArt = (id: string) => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        const defaultImage = PlaceHolderImages[0];
        return { url: defaultImage.imageUrl, hint: defaultImage.imageHint };
    }
    return { url: image.imageUrl, hint: image.imageHint };
}

export const playlist: Track[] = [
  {
    id: 1,
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    duration: "4:03",
    albumArtUrl: getAlbumArt('album-1').url,
    albumArtHint: getAlbumArt('album-1').hint,
  },
  {
    id: 2,
    title: "Electric Feel",
    artist: "MGMT",
    album: "Oracular Spectacular",
    duration: "3:49",
    albumArtUrl: getAlbumArt('album-2').url,
    albumArtHint: getAlbumArt('album-2').hint,
  },
  {
    id: 3,
    title: "Tongue Tied",
    artist: "Grouplove",
    album: "Never Trust a Happy Song",
    duration: "3:38",
    albumArtUrl: getAlbumArt('album-3').url,
    albumArtHint: getAlbumArt('album-3').hint,
  },
  {
    id: 4,
    title: "Shelter",
    artist: "Porter Robinson & Madeon",
    album: "Shelter",
    duration: "3:39",
    albumArtUrl: getAlbumArt('album-4').url,
    albumArtHint: getAlbumArt('album-4').hint,
  },
  {
    id: 5,
    title: "Sleepyhead",
    artist: "Passion Pit",
    album: "Manners",
    duration: "2:55",
    albumArtUrl: getAlbumArt('album-1').url,
    albumArtHint: getAlbumArt('album-1').hint,
  },
    {
    id: 6,
    title: "Walking On A Dream",
    artist: "Empire of the Sun",
    album: "Walking on a Dream",
    duration: "3:16",
    albumArtUrl: getAlbumArt('album-2').url,
    albumArtHint: getAlbumArt('album-2').hint,
  },
  {
    id: 7,
    title: "1901",
    artist: "Phoenix",
    album: "Wolfgang Amadeus Phoenix",
    duration: "3:13",
    albumArtUrl: getAlbumArt('album-3').url,
    albumArtHint: getAlbumArt('album-3').hint,
  },
  {
    id: 8,
    title: "The Reeling",
    artist: "Passion Pit",
    album: "Manners",
    duration: "4:48",
    albumArtUrl: getAlbumArt('album-4').url,
    albumArtHint: getAlbumArt('album-4').hint,
  },
];
