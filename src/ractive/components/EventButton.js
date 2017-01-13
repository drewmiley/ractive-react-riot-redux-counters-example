import Ractive from 'ractive';

import template from './views/event-button.html';

let EventButton = Ractive.extend({
	template,
	click: display => {
		console.log(display);
	}
});

export default EventButton;