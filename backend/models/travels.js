const mongoose = require('mongoose');
var moment = require('moment');

const travelSchema = mongoose.Schema({
	arrival: String,
	departure: String,
	date: String,
	hour: String,
	price: Number,
	isPurchased: Boolean,
});
const Travel = mongoose.model('travels', travelSchema);

module.exports = Travel;