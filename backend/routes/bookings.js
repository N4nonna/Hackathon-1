var express = require('express');
var router = express.Router();

var moment = require('moment');
moment().format(); 

require('../models/connection');
const Travel = require('../models/travels');
const {} = require('../modules/bookings');


router.post('/', function(req, res) {
	Travel.updateMany({}, {isPurchased : true}).then(data => {
		if (data.modifiedCount > 0) {
			Travel.find({this: true}).then(data => {
				if (data[0])
					res.json({result: true, booked: data});
				else
					res.json({result: false, error: 'No purchased travel yet'});
			});
		}
	});
});

/* GET new booked travel. */
router.get('/', function(req, res) {
	Travel.find({isPurchased : true}).then(data => {
		if (data[0])
			res.json({result: true, booked: data});
		else
			res.json({result: false, error: 'No purchased travel yet'})
	})
});

module.exports = router;