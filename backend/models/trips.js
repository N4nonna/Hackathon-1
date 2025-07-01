const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
});
const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;