import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/counters';

import CounterLabel from './components/CounterLabel';
import EventButton from './components/EventButton';

class App extends Component {
	render() {
		return <div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{this.props.framework}</h3>
			</div>
			<div className='panel-body'>
				<EventButton
					event={this.props.increment}
					framework={this.props.framework}
					display='+' />
				<EventButton
					event={this.props.decrement}
					framework={this.props.framework}
					display='-' />
			</div>
			<div className='panel-footer'>
				{this.props.frameworkScores.map(framework =>
					<CounterLabel
						key={framework.get('name')}
						label={framework.get('name')}
						value={framework.get('score')} />
				)}
			</div>
		</div>
	};
};

const mapStateToProps = state => {
	return {
		framework: 'React',
		frameworkScores: state.get('frameworkScores')
	};
};

export default connect(mapStateToProps, actionCreators)(App);