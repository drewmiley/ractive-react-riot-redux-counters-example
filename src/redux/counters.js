import { Map } from 'immutable';

// Actions

const SET_STATE = 'rrrr/SET_STATE';
const INCREMENT = 'rrrr/INCREMENT';
const DECREMENT = 'rrrr/DECREMENT';

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

const SetState = (state, newState) => {
	return state.mergeDeep(newState);
};

const Increment = (state, framework) => {
	return state.updateIn([
		'frameworkScores',
		state.get('frameworkScores').findIndex(frameworkScore => frameworkScore.get('name') === framework),
		'score'
	], score => score + 1);
};

const Decrement = (state, framework) => {
	return state.updateIn([
		'frameworkScores',
		state.get('frameworkScores').findIndex(frameworkScore => frameworkScore.get('name') === framework),
		'score'
	], score => score - 1);
};

export default (state = Map(), action) => {
	switch (action.type) {
		case SET_STATE:
			return SetState(state, action.state);
		case INCREMENT:
			return Increment(state, action.framework);
		case DECREMENT:
			return Decrement(state, action.framework);
		default:
			return state;
	};
	return state;
};