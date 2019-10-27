import React, { Component } from 'react';
import Plant from './Plant';

class Plants extends Component {
	// componentDidMount() {
	// 	this.setState({ plants: this.props.plants });
	// 	console.log('mounting');
	// }

	render() {
		console.log('rendering');
		let plantInfo = this.props.plants.map(plant => {
			return <Plant plant={plant} />;
		});

		return <div>{plantInfo}</div>;
	}
}

export default Plants;
