import { GENRES, MAIN_MUSICS, MUSICS_BY_QUERY, FAVORITES } from '../actions';

const INITIAL_STATE = {
  renderQuery: false,
  genres: [],
  mainMusics: [],
  stateQueryMusics: [],
  favorites: [],
};

export default function musics(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GENRES:
  return {
    ...state,
    genres: action.array,
  };
  case MAIN_MUSICS:
    return {
      ...state,
      mainMusics: action.array,
    };
  case MUSICS_BY_QUERY:
  return {
    ...state,
    renderQuery: action.render,
    stateQueryMusics: action.array,
  };
  case FAVORITES:
    return {
      ...state,
      favorites: action.array,
    };

  default:
    return state;
  }
}
