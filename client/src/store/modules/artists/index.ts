import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { IArtist } from '@src/interfaces/artist';

interface IArtistStore {
  artist: IArtist[];
  setArtist: (artist: IArtist[]) => void;
}

export const useArtistStore = create<IArtistStore>()(
  immer((set) => ({
    artist: [],
    setArtist: (artist) =>
      set((state) => {
        state.artist = artist;
      }),
  })),
);
