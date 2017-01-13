import Ractive from 'ractive';

import 'bootstrap/dist/css/bootstrap.css';

import template from './app.html';

import CounterLabel from './components/CounterLabel';
import EventButton from './components/EventButton';

let App = new Ractive({  
	el: '#ractive',
	template,
	components: {
		CounterLabel,
		EventButton
	},
	data: {}
});

export default App;