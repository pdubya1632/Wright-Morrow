const mongoose = require('mongoose');

const { Schema } = mongoose;

const requestSchema = new Schema({

  firstName: { type: String, },
  lastName: { type: String, },

  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  shipFrom: {
    type: Number,
  },
  shipTo: {
    type: Number,
  },
  description: {
    type: String,
  }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
