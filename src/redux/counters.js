import { Map } from 'immutable';

// Actions

export const SET_STATE = 'rrrr/SET_STATE';
export const INCREMENT = 'rrrr/INCREMENT';
export const DECREMENT = 'rrrr/DECREMENT';

// Action Creators

export const setState = state => {
	return {
		type: SET_STATE,
		state
	};
};

export const increment = framework => {
	return {
		type: INCREMENT,
		framework
	};
};

export const decrement = framework => {
	return {
		type: DECREMENT,
		framework
	};
};

// Reducer

const setState = (state, newState) => {
	return state.mergeDeep(newState);
};

const increment = (state, framework) => {
	console.log(framework);
	console.log('+1');
	return state;
};

const decrement = (state, framework) => {
	console.log(framework);
	console.log('-1');
	return state;
};

export default (state = Map(), action) => {
	switch (action.type) {
		case SET_STATE:
			return setState(state, action.state);
		case INCREMENT:
			return increment(state, action.framework);
		case DECREMENT:
			return decrement(state, action.framework);
		default:
			return state;
	};
	return state;
};