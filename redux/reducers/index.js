import { combineReducers } from 'redux';
import { gameSettings } from './gameSettingsReducer';
import { gameMode } from './gameModeReducer';
import { round } from './roundReducers';
import { createStore } from 'redux';

const appReducers = combineReducers({ gameSettings, gameMode, round });

const rootReducer = (state, action) => {
	return appReducers(state, action);
};

let store = createStore(rootReducer);

export default store;
