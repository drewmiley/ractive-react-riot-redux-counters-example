import React, { Component } from 'react';

import CounterLabel from './components/CounterLabel';
import EventButton from './components/EventButton';

class App extends Component {
	render() {
		return <div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>React</h3>
			</div>
			<div className='panel-body'>
				<EventButton
					event={undefined}
					display='React +' />
				<EventButton
					event={undefined}
					display='React -' />
			</div>
			<div className='panel-footer'>
				<CounterLabel
					label='Ractive'
					value='0' />
				<CounterLabel
					label='React'
					value='0' />
				<CounterLabel
					label='Riot'
					value='0' />
			</div>
		</div>
	};
};

export default App;