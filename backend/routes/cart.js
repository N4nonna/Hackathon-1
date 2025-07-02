var express = require('express');
var router = express.Router();

var moment = require('moment');

require('../models/connection');
const Trip = require('../models/trips');
const Travel = require('../models/travels');
// const {createTravel, findTravel} = require('../modules/cart');


/* POST new travel in travels collection. body -> _id */
router.post('/', function(req, res) {
	let _id = req.body.id;
	// find doc in trips
	Trip.findById(_id).then(dataTrip => {
		let date = moment(dataTrip.date).format();
		let hour = moment(dataTrip.date).format();
		// create new doc in travels
		const newTravel = new Travel({
			arrival: dataTrip.arrival,
			departure: dataTrip.departure,
			date : moment(date).format('YYYY-MM-DD'),
			hour : moment(hour).format('HH:MM'),
			price: dataTrip.price,
		})
		newTravel.save().then(() => { 
			console.log('new travel added to DB');
			// retirn all travels doc
			Travel.find().then(travels => {
				if (travels)
					res.json({result: true, travels})
				else
					res.json({result: false, error: 'No travels registred'})
			})
		});
	});
});

// GET travels collection in cart page.
router.get('/', function(req, res) {
	Travel.find().then(travels => {
		if (travels)
			res.json({result: true, travel: travels});
		else
			res.json({result: false, error: 'No travels registred'})
	})
})

// DELETE travel in travel collection using _id. body -> _id
router.delete('/', function(req, res) {
	Travel.deleteOne({'_id': req.body.id}).then(deletedDoc => {
    if (deletedDoc.deletedCount > 0) {
      // document successfully deleted and return all travels doc
      Travel.find().then(data => {
        res.json({ result: true, travels: data });
      });
    } else {
      res.json({ result: false, error: "No travels registered" });
    }
  });
});

module.exports = router;