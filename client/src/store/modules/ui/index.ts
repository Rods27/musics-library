import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IUiStore {
  isGenresSidebarOpen: boolean;
  toggleGenresSidebar: () => void;
  setGenresSidebarOpen: (open: boolean) => void;
}

export const useUiStore = create<IUiStore>()(
  immer((set) => ({
    isGenresSidebarOpen: false,
    toggleGenresSidebar: () =>
      set((state) => {
        state.isGenresSidebarOpen = !state.isGenresSidebarOpen;
      }),
    setGenresSidebarOpen: (open: boolean) =>
      set((state) => {
        state.isGenresSidebarOpen = open;
      }),
  })),
);
