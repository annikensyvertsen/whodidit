import { SET_GAME_MODE, GET_STARTED, SET_TYPE, SET_ROUNDS, SET_CATEGORY } from '../actions/actionTypes';

const INITIAL_STATE = {
	getStarted: false,
	gameMode: '',
	rounds: 5,
	type: '',
	category: ''
};

export const gameMode = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_GAME_MODE:
			return Object.assign({}, state, {
				gameMode: action.payload
			});
		case GET_STARTED:
			return Object.assign({}, state, {
				getStarted: true
			});
		case SET_TYPE:
			return Object.assign({}, state, {
				type: action.payload
			});
		case SET_CATEGORY:
			return Object.assign({}, state, {
				category: action.payload
			});
		case SET_ROUNDS:
			return Object.assign({}, state, {
				rounds: action.payload
			});
		default:
			return state;
	}
};
