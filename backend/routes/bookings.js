var express = require('express');
var router = express.Router();

var moment = require('moment');
moment().format(); 

const fetch = require('node-fetch');
require('../models/connection');
const Trip = require('../models/trips');
const Travel = require('../models/travels');
const {} = require('../modules/bookings');

/* GET bookings page. */
router.get('/', function(req, res, next) {
	res.render('bookings', { title: 'bookings' });
});

module.exports = router;