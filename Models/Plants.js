const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlantSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	states: [
		{
			type: String
		}
	],
	annual_bloom: {
		type: String
	},
	perennial_bloom: {
		type: String
	},
	growth_period: {
		type: String
	},
	growth_rate: {
		type: String
	},
	growth_reqs: {
		type: String
	},
	lifespan: {
		type: String
	},
	water_reqs: {
		type: String
	},
	temp_range: {
		type: String
	},
	sun_exposure: {
		type: String
	},
	facts: [
		{
			type: String
		}
	]
});

module.exports = Plants = mongoose.model('plants', PlantSchema);
