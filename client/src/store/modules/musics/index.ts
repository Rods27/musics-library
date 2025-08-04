import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { IMusics } from '@src/interfaces/musics';

interface IStoreTags {
  mainMusics: IMusics[];
  setMainMusics: (mainMusics: IMusics[]) => void;
}

export const useMusicsStore = create<IStoreTags>()(
  immer((set) => ({
    mainMusics: [],
    setMainMusics: (mainMusics) =>
      set((state) => {
        state.mainMusics = mainMusics;
      }),
  })),
);
