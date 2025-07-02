// const Trip = require('../models/trips');
const Travel = require('../models/travels');
var moment = require('moment');

function createTravel(dataTrip) {
	let date = moment(dataTrip.date).format();
	let hour = moment(dataTrip.date).format();
	const newTravel = new Travel({
	arrival: dataTrip.arrival,
	departure: dataTrip.departure,
	date : moment(date).format('YYYY-MM-DD'),
	hour : moment(hour).format('HH:MM'),
	price: dataTrip.price,
	})
	newTravel.save().then(travels => { 
		console.log('new travel added to DB');
		res.json({result: true, travels})
	});
}

function findTravel() {
	Travel.find().then(travels => {
		if (travels)
			return travels;
		else
			return null;
	})
}

module.exports = {createTravel, findTravel};