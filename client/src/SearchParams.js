import React, { Component } from 'react';
import axios from 'axios';
import Plants from './Plants';

class SearchParams extends Component {
	// First item is the string, second item is the updater function
	state = {
		location: '',
		plants: []
	};

	componentDidMount() {
		this.setState({ location: 'Georgia' });
	}

	onSubmit = () => {
		const { location } = this.state;
		let loc = {
			state: location.toLowerCase()
		};

		axios.post('api/plants/state/', loc).then(res => this.setState({ plants: res.data }));
	};

	renderPlants = () => {
		if (this.state.plants.length === 0) {
			console.log('no plants to render :(');
			return <div></div>;
		} else {
			console.log(this.state.plants);
			return (
				<div>
					<Plants plants={this.state.plants} />
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				<div className='search-params myButtonBox'>
					<label htmlFor='location'>
						Location
						<input
							id='location'
							defaultValue={this.state.location}
							placeholder='location'
							onChange={e => {
								this.setState({ location: e.target.value });
							}} // weeny tiney function
						/>
					</label>
					<button className='myButton' onClick={this.onSubmit}>
						Submit
					</button>
				</div>
				<div>{this.renderPlants()}</div>
			</div>
		);
	}
}

export default SearchParams;
