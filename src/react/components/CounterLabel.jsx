import React, { Component } from 'react';

export default class CounterLabel extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return this.props.value !== nextProps.value;
		};
	};
	render() {
		return <p className='h2'>{this.props.label}: {this.props.value}</p>
	};
};