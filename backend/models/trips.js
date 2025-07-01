const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
	arrival: String,
	departure: String,
	date: Date,
	price: Number,
});
const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;