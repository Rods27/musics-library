import { combineReducers } from 'redux';
import musicsReducer from './musics';

const rootReducer = combineReducers({ musicsReducer });

export default rootReducer;
