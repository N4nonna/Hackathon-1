var express = require('express');
var router = express.Router();

var moment = require('moment');
moment().format(); 

const Trip = require('../models/trips');
const {findElem, checkTrip, findDate} = require('../modules/index');

let departure;
let arrival; 
let date;

/* POST home page. */
router.post('/', (req, res) => {
  departure = req.body.departure;
  arrival = req.body.arrival;
  date = req.body.date;
  if (checkTrip(departure, arrival, date)) {
    Trip.find({departure: findElem(departure), arrival: findElem(arrival), date : findDate(date)})
      .then(dataTrip => {
        if (dataTrip[0]) {
          res.json({result: true, trip : dataTrip });
        }else
          res.json({result : false, error: 'No travel found with those infos.'});
  })
  } else
    res.json({result: false, error: 'Missing or empty fields'});
})


module.exports = router;
