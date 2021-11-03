const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.DB_CONNECTION_STRING);

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true, useUnifiedTopology: true
})
module.exports = mongoose