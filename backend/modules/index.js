// const Trip = require('../models/trips');
// const Travel = require('../models/travels');
var moment = require('moment');

function findElem(elem) {
	return {$regex: new RegExp(elem, 'gi')};
}

function checkTrip(departure, arrival, date){
	return (departure && arrival && date) ? true : false;
}

function findDate(date) {
	let date2 = moment(date).add(1, 'd');
	date2 = moment(date2).format('YYYY-MM-DD');
	return {$gte : date, $lte : date2};
}

module.exports = {findElem, checkTrip, findDate};