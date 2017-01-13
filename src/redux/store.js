import {
    List,
    Map
} from 'immutable';
import {
	compose,
	createStore
} from 'redux';

import * as actions from './counters';
import reducer from './counters';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

const initialState = Map({});

store.dispatch(actions.setState(initialState));

console.log(store.getState());

export default store;