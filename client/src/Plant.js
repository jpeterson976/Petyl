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
						<CardTitle>{plant.name}</CardTitle>
						<CardText>
							<Row>{plant.lifespan}</Row>
							<Row>{plant.annual_bloom}</Row>
							<Row>{plant.perennial_bloom}</Row>
							<Row>{plant.growth_period}</Row>
							<Row>{plant.growth_rate}</Row>
							<Row>{plant.growth_reqs}</Row>
							<Row>{plant.water_reqs}</Row>
							<Row>{plant.temp_range}</Row>
							<Row>{plant.sun_exposure}</Row> <Row>{plant.growth_period}</Row>
							<Row>
								Fun facts: <br />
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
