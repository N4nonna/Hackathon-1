var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Trip = require('../models/trips');
const {} = require('../modules/bookings');

/* GET bookings page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'bookings' });
});

module.exports = router;