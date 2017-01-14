import React, { Component } from 'react';

export default class EventButton extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return false;
		};
	};
	render() {
		return <button
			className='btn btn-default'
			onClick={() => { this.props.event(this.props.framework) }}>
			{this.props.framework} {this.props.display}
		</button>
	};
};