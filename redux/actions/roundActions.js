import { SET_CURRENT_ROUND, SET_TOTAL_ROUNDS, } from './actionTypes';

export const setCurrentRounds = (round) => ({
	type: SET_CURRENT_ROUND,
	payload: round
});
export const setTotalRounds = (round) => ({
	type: SET_TOTAL_ROUNDS,
	payload: round
});




