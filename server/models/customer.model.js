const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  billingAddress: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
  },
  jobIds: Number,
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
