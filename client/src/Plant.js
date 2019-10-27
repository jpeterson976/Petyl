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
							<Row className="plant-row"> {plant.lifespan}</Row>
							<Row className="plant-row"> {plant.annual_bloom}</Row>
							<Row className="plant-row"> {plant.perennial_bloom}</Row>
							<Row className="plant-row"> {plant.growth_period}</Row>
							<Row className="plant-row"> {plant.growth_rate}</Row>
							<Row className="plant-row"> {plant.growth_reqs}</Row>
							<Row className="plant-row"> {plant.water_reqs}</Row>
							<Row className="plant-row"> {plant.temp_range}</Row>
							<Row className="plant-row"> {plant.sun_exposure}</Row> 
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
