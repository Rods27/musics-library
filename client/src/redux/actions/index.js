export const GENRES = 'GENRES';
export const MAIN_MUSICS = 'MAIN_MUSICS';
export const MUSICS_BY_QUERY = 'MUSICS_BY_QUERY';
export const FAVORITES = 'FAVORITES';
export const MUSICS_BY_GENDER = 'MUSICS_BY_GENDER';
export const ARTISTS_BY_GENDER = 'ARTISTS_BY_GENDER';
export const MANIPULATE_RENDER = 'MANIPULATE_RENDER';

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

export const artistsByGenderAction = (
  {renderMusics, renderArtists},
  array
) => ({
  type: ARTISTS_BY_GENDER,
  renderMusics,
  renderArtists,
  array,
});

export const musicsByArtistAction = (
  {renderArtists,renderMusics},
  array
) => ({
  type: MUSICS_BY_GENDER,
  renderArtists,
  renderMusics,
  array,
});

export const renderAction = (artists, musics) => ({
  type: MANIPULATE_RENDER,
  artists,
  musics,
});
