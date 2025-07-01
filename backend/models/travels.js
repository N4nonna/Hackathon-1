const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
	arrival: String,
	departure: String,
	date: Date,
	price: Number,
});
const Travel = mongoose.model('travels', travelSchema);

module.exports = Travel;