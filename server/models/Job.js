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
    type: String,

  },
  pickupDate: {
    type: String,

  },
  pickupAddress: {
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
  dropOffAddress: {
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
  industry: {
    type: String,

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