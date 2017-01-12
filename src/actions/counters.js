import * as actions from '../constants/actions';

export const setState = state => {
	return {
		type: actions.SET_STATE,
		state
	};
};

export const increment = framework => {
	return {
		type: actions.INCREMENT,
		framework
	};
};

export const decrement = framework => {
	return {
		type: actions.DECREMENT,
		framework
	};
};