import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Row } from 'reactstrap';

class Plant extends Component {
	render() {
		const { plant } = this.props;

		let facts = plant.facts.map(fact => {
			return fact;
		});

		console.log(this.props.plant);

		return (
			<div>
				<Card>
					<CardBody>
						<CardTitle className="plant-title">{plant.name}</CardTitle>
						<CardText>
							<Row className="plant-row lifespan"> {plant.lifespan}</Row>
							<Row className="plant-row annual_bloom"> {plant.annual_bloom}</Row>
							<Row className="plant-row perennial_bloom"> {plant.perennial_bloom}</Row>
							<Row className="plant-row growth_period"> {plant.growth_period}</Row>
							<Row className="plant-row growth_rate"> {plant.growth_rate}</Row>
							<Row className="plant-row growth_reqs"> {plant.growth_reqs}</Row>
							<Row className="plant-row water_reqs"> {plant.water_reqs}</Row>
							<Row className="plant-row temp_range"> {plant.temp_range}</Row>
							<Row className="plant-row sun_exposure"> {plant.sun_exposure}</Row> 
							<Row className="plant-row growth-p"> {plant.growth_period}</Row>
							<Row>
								Fun facts: <br className="plant-row"/>
								{facts}
							</Row>
						</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Plant;
