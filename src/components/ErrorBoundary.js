import React, { Component } from 'react';

class ErorrBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	//new life cycle method
	componentDidCatch(error,info) {
		this.setState({hasError: true});
	}

	render() {
		if(this.state.hasError) {
			return <h1>Oooops. That is not good. </h1>
		}
		return this.props.children; 
	}
}

export default ErorrBoundary;