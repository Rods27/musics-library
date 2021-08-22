import { MUSICS_BY_GENDER, ARTISTS_BY_GENDER, MANIPULATE_RENDER } from '../actions';

const INITIAL_STATE = {
  renderArtists: false,
  renderMusics: false,
  artistsByGender: [],
  musicsByGender: [],
};

export default function artists(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ARTISTS_BY_GENDER:
    return {
      ...state,
      renderArtists: action.renderArtists,
      renderMusics: action.renderMusics,
      artistsByGender: action.array,
    };
  case MUSICS_BY_GENDER:
    return {
      ...state,
      renderArtists: action.renderArtists,
      renderMusics: action.renderMusics,
      musicsByGender: action.array,
    };
  case MANIPULATE_RENDER:
    return {
      ...state,
      renderArtists: action.artists,
      renderMusics: action.musics,
    };
  default:
    return state;
  }
}
