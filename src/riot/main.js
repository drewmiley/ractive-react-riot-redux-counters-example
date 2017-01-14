import riot from 'riot';

import 'bootstrap/dist/css/bootstrap.css';

import './riot-app';

import * as actionCreators from '../redux/counters';
import store from '../redux/store';

document.addEventListener('DOMContentLoaded', () => {
	riot.mount('riot-app', { framework: 'Riot', store, actionCreators });
});
