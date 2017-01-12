import Ractive from 'ractive';

import 'bootstrap/dist/css/bootstrap.css';

import template from './app.html';

import NameInput from './components/NameInput';

let App = new Ractive({  
	el: '#ractive',
	template,
	components: {
		NameInput
	},
	data: {
		name: 'Drew'
	}
});

export default App;