import { combineReducers } from 'redux';
import musicsReducer from './musics';
import artistsReducer from './artists';

const rootReducer = combineReducers({ musicsReducer, artistsReducer });

export default rootReducer;
