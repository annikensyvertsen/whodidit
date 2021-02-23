import { GET_CURRENT_ROUND, GET_TOTAL_ROUNDS, SET_CURRENT_ROUND, SET_TOTAL_ROUNDS } from '../actions/actionTypes';

const INITIAL_STATE = {
  currentRound: 1,
  totalRounds: 5,
};

export const round = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TOTAL_ROUNDS:
			return Object.assign({}, state, {
				totalRounds: action.payload
			});
		case SET_CURRENT_ROUND:
			return Object.assign({}, state, {
				currentRound: action.payload
      });
		default:
			return state;
	}
};
