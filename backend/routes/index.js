var express = require('express');
var router = express.Router();

var moment = require('moment');
moment().format(); 

const fetch = require('node-fetch');
require('../models/connection');
const Trip = require('../models/trips');
const {} = require('../modules/index');

let departure;
let arrival; 
let date;

/* GET home page. */
router.post('/', (req, res) => {
  departure = req.body.departure;
  arrival = req.body.arrival;
  date = req.body.date;
  if (checkTrip(departure, arrival, date)) {
  Trip.findOne({departure, arrival, date})
    .then(dataTrip => {
      if (dataTrip)
        res.json({result: true, trip : dataTrip });
      else
        res.sendStatus(418).json({result : false, error: 'No travel found with those infos.'});
  })} else
    res.json({result: false, error: 'Missing or empty fields'});
})

module.exports = router;
