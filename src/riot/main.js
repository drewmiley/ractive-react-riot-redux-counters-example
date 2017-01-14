import riot from 'riot';

import 'bootstrap/dist/css/bootstrap.css';

import './riot-app';

import store from '../redux/store';

document.addEventListener('DOMContentLoaded', () => {
	riot.mount('riot-app', { store });
});
