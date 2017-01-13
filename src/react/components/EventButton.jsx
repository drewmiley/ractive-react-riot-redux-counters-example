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
			onClick={(e) => { console.log(this.props.display) }}>
			{this.props.display}
		</button>
	};
};