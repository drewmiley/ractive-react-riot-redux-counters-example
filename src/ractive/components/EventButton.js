import Ractive from 'ractive';

import template from './views/event-button.html';

let EventButton = Ractive.extend({
	template,
	click: function(action) {
		this.fire('click', action);
	}
});

export default EventButton;