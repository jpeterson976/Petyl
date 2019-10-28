const express = require('express');
const router = express.Router();

// Plant Model
const Plant = require('../../Models/Plants');

// @route   GET api/plants/getall
// @desc    Gets all plant information
// @access  Public
router.get('/getall', (req, res) => {
	Plants.find()
		.then(plants => res.json(plants))
		.catch(err => console.log('Error in plants/getall: ' + err));
});

// @route   GET api/plants
// @desc    Gets information about the specified plant
// @access  Public
router.get('/', (req, res) => {
	Plants.find({ name: req.body.name })
		.then(plant => res.json(plant))
		.catch(err => console.log('Error in plants/get: ' + err));
});

// @route	GET api/plants/state
// @desc	Gets all plants located in the specified state
// @access 	Public
router.post('/state', (req, res) => {
	Plants.find({ states: req.body.state })
		.then(plants => res.json(plants))
		.catch(err => console.log('Error in plants/get/state: ' + err));
});

// @route   POST api/plants
// @desc    Posts new plant & info to database
// @access  Public
router.post('/', (req, res) => {
	const newPlant = new Plant({
		name: req.body.name,
		states: req.body.states,
		annual_bloom: req.body.annual_bloom,
		perennial_bloom: req.body.perennial_bloom,
		growth_period: req.body.growth_period,
		growth_rate: req.body.growth_rate,
		growth_reqs: req.body.growth_reqs,
		lifespan: req.body.lifespan,
		water_reqs: req.body.water_reqs,
		temp_range: req.body.temp_range,
		sun_exposure: req.body.sun_exposure,
		facts: req.body.facts
	});

	newPlant.save().then(plant => res.json(plant));
});

module.exports = router;
