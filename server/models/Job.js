const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema({
  description: {
    type: String
  },
  status: {
    type: String,
  },
  pickupDate: {
    type: String,
  },
  cost: {
    type: Number,
  },
  invoice: {
    type: Number,
  },
  category: {
    type: Number,
    min: 0,
    default: 0
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;