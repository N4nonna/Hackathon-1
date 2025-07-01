const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECT_STRING, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));