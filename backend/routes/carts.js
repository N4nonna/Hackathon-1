var express = require('express');
var router = express.Router();

var moment = require('moment');
moment().format(); 

const fetch = require('node-fetch');
require('../models/connection');
const Trip = require('../models/trips');
const Travel = require('../models/travels');
const {} = require('../modules/carts');

/* GET carts page. */
router.get('/', function(req, res, next) {
	res.render('carts', { title: 'carts' });
});

module.exports = router;