import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { IGenre } from '@src/interfaces/genre';

interface IGenresStore {
  genres: IGenre[];
  setGenres: (genres: IGenre[]) => void;
}

export const useGenresStore = create<IGenresStore>()(
  immer((set) => ({
    genres: [],
    setGenres: (genres) =>
      set((state) => {
        state.genres = genres;
      }),
  })),
);
