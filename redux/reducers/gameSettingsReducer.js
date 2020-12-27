import { combineReducers } from 'redux';
import { SET_PREV_PAGE, GET_PAGE, SET_NAME, SET_PAGE } from '../actions/actionTypes';

const INITIAL_STATE = {
	page: 'firstPage',
	pageStack: [ 'home' ],
	name: ''
};

export const gameSettings = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_PAGE:
			return Object.assign({}, state, {
				...state,
				page: action.payload,
				pageStack: [ ...state.pageStack, action.payload ]
			});
		case SET_PREV_PAGE:
			return Object.assign({}, state, {
				...state,
				pageStack: state.pageStack.slice(0, -1),
				page: state.pageStack[state.pageStack.length - 2]
			});
		case SET_NAME:
			return Object.assign({}, state, {
				name: action.payload
			});
		case GET_PAGE:
			return state.pageStack[state.pageStack.length - 1];
		default:
			return state;
	}
};
