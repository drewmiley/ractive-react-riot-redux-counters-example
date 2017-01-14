import Ractive from 'ractive';

import 'bootstrap/dist/css/bootstrap.css';

import template from './app.html';

import CounterLabel from './components/CounterLabel';
import EventButton from './components/EventButton';

import * as actionCreators from '../redux/counters';
import store from '../redux/store';

let render = () => {
	new Ractive({  
		el: '#ractive',
		template,
		components: {
			CounterLabel,
			EventButton
		},
		data: {
			framework: 'Ractive',
			store,
			actionCreators
		}
	}).on({
		'EventButton.click': (action) => {
			store.dispatch(action);
		}
	});
};

store.subscribe(render);
render();