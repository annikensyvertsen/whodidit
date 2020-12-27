import { SET_GAME_MODE, GET_STARTED, SET_CATEGORY, SET_TYPE, SET_ROUNDS } from './actionTypes';

export const setGameMode = (mode) => ({
	type: SET_GAME_MODE,
	payload: mode
});

export const getStarted = () => ({
	type: GET_STARTED
});

export const setRounds = (round) => ({
	type: SET_ROUNDS,
	payload: round
});

export const setType = (type) => ({
	type: SET_TYPE,
	payload: type
});

export const setCategory = (category) => ({
	type: SET_CATEGORY,
	payload: category
});
