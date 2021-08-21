export const GENRES = 'GENRES';
export const MAIN_MUSICS = 'MAIN_MUSICS';
export const MUSICS_BY_QUERY = 'MUSICS_BY_QUERY';
export const FAVORITES = 'FAVORITES';

export const genresAction = (array) => ({
  type: GENRES,
  array,
});

export const mainMusicsAction = (array) => ({
  type: MAIN_MUSICS,
  array,
});

export const queryMusicsAction = (array, render) => ({
  type: MUSICS_BY_QUERY,
  render,
  array
});

export const favoritesAction = (array) => ({
  type: FAVORITES,
  array
});
