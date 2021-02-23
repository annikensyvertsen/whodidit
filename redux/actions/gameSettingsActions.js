import { SET_PREV_PAGE, GET_PAGE, SET_NAME, SET_PAGE, SET_PLAYER } from './actionTypes';

export const setPrevPage = () => ({
	type: SET_PREV_PAGE
});

export const setPage = (pageName) => ({
	type: SET_PAGE,
	payload: pageName
});

export const getPage = () => ({
	type: GET_PAGE
});

export const setName = (name) => ({
	type: SET_NAME,
	payload: name
});

//for each person that has joined the game, this should be called. Creating a list of the players in the game
export const setPlayer = (player) => ({
	type: SET_PLAYER,
	payloard: player
})