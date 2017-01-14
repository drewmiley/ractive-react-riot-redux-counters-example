import Ractive from 'ractive';

import 'bootstrap/dist/css/bootstrap.css';

import template from './app.html';

import CounterLabel from './components/CounterLabel';
import EventButton from './components/EventButton';

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
			state: store.getState().toJS()
		}
	});
};

store.subscribe(render);
render();