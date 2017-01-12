import { Map } from 'immutable';

import * as actions from '../constants/actions';

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
		case actions.SET_STATE:
			return setState(state, action.state);
		case actions.INCREMENT:
			return increment(state, action.framework);
		case actions.DECREMENT:
			return decrement(state, action.framework);
		default:
			return state;
	};
	return state;
};