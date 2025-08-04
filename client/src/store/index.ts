import { create } from 'zustand';

interface Music {
  id: number;
  title: string;
  duration: string;
  album: {
    title: string;
  };
  [key: string]: any;
}

interface Genre {
  id: number;
  name: string;
  [key: string]: any;
}

interface MusicStore {
  // Estado das músicas
  renderQuery: boolean;
  genres: Genre[];
  stateQueryMusics: Music[];
  favorites: Music[];

  // Estado dos artistas
  renderArtists: boolean;
  renderMusics: boolean;
  artistsByGender: any[];
  musicsByGender: any[];

  // Actions para músicas
  setGenres: (genres: Genre[]) => void;
  setQueryMusics: (musics: Music[], render: boolean) => void;
  setFavorites: (favorites: Music[]) => void;

  // Actions para artistas
  setArtistsByGender: (artists: any[], renderArtists: boolean, renderMusics: boolean) => void;
  setMusicsByGender: (musics: any[], renderArtists: boolean, renderMusics: boolean) => void;
  setRenderState: (artists: boolean, musics: boolean) => void;
}

export const useMusicStoreTemp = create<MusicStore>((set) => ({
  // Estado inicial
  renderQuery: false,
  genres: [],
  stateQueryMusics: [],
  favorites: [],
  renderArtists: false,
  renderMusics: false,
  artistsByGender: [],
  musicsByGender: [],

  // Actions para músicas
  setGenres: (genres) => set({ genres }),

  setQueryMusics: (stateQueryMusics, renderQuery) => set({ stateQueryMusics, renderQuery }),

  setFavorites: (favorites) => set({ favorites }),

  // Actions para artistas
  setArtistsByGender: (artistsByGender, renderArtists, renderMusics) =>
    set({ artistsByGender, renderArtists, renderMusics }),

  setMusicsByGender: (musicsByGender, renderArtists, renderMusics) =>
    set({ musicsByGender, renderArtists, renderMusics }),

  setRenderState: (renderArtists, renderMusics) => set({ renderArtists, renderMusics }),
}));
