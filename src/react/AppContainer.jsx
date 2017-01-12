import React, { Component } from 'react';

import NameInput from './components/NameInput';

class App extends Component {
	render() {
		return <div className='container'>
			<NameInput value='Drew' />
			<p>
				Name: Drew
			</p>
		</div>
	};
};

export default App;