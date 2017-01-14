import {
	List,
	Map
} from 'immutable';
import {
	compose,
	createStore
} from 'redux';

import { setState } from './counters';
import reducer from './counters';

const createStoreDevTools = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

const initialState = Map({
	frameworkScores: List([
		Map({ name: 'Ractive', score: 0 }),
		Map({ name: 'React', score: 0 }),
		Map({ name: 'Riot', score: 0})
	])
});

store.dispatch(setState(initialState));

export default store;