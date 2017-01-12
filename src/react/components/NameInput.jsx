import React, { Component } from 'react';

export default class NameInput extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return this.props.value !== nextProps.value;
		};
	};
	render() {
		return <input type='text' value={this.props.value} />
	};
};