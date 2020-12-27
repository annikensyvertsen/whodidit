import { SET_PREV_PAGE, GET_PAGE, SET_NAME, SET_PAGE } from './actionTypes';
/* export const setNextPage = () => ({
	type: SET_NEXT_PAGE
}); */

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
