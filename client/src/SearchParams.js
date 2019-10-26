import React, { Component } from 'react';
import axios from 'axios';

class SearchParams extends Component {
	// First item is the string, second item is the updater function
	state = {
		location: '',
		plants: []
	};

	componentDidMount() {
		this.setState({ location: 'Atlanta, GA' });
	}

	onSubmit = () => {
		const { location } = this.state;
		let loc = {
			state: location.substr(location.length - 2)
		};

		axios.get('api/plants/state/', loc).then(res => this.setState({ plants: res.data }));
	};

	render() {
		return (
			<div className='search-params'>
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
				<button onClick={this.onSubmit}>Submit</button>
			</div>
		);
	}
}

export default SearchParams;
