const mongoose = require('mongoose');

const { Schema } = mongoose;

const requestSchema = new Schema({

  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  industry: {
    type: String,
  },
  shipFrom: {
    type: Number,
  },
  shipTo: {
    type: Number,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
