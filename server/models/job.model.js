const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
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
});

const jobSchema = new Schema({
  jobId: {
    type: String,
  },
  status: {
    type: String,
  },
  industry: {
    type: String,
  },
  pickupDate: {
    type: String,
  },
  cost: {
    type: Number,
  },
  invoice: {
    type: String,
  },
  tracking: {
    type: Number,
  },
  category: {
    type: String,
  },
  pickupAddress: [addressSchema],
  dropOffAddress: [addressSchema],
  description: {
    type: String,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
