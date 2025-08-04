import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { IMusics } from '@src/interfaces/musics';

interface IFavoritesStore {
  favorites: IMusics[];
  setFavorites: (favorites: IMusics) => void;
}

export const useFavoritesStore = create<IFavoritesStore>()(
  immer(
    persist(
      (set) => ({
        favorites: [],
        setFavorites: (music) =>
          set((state) => {
            const hasMusic = state.favorites.some((f) => f.id === music.id);
            if (hasMusic) {
              const newFavorites = state.favorites.filter((f) => f.id !== music.id);
              state.favorites = newFavorites;
            } else {
              const newFavorites = [...state.favorites, music];
              state.favorites = newFavorites;
            }
          }),
      }),
      { name: 'favorites' },
    ),
  ),
);
