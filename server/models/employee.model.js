const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  address: {
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
  isAdmin: Boolean,
  active: Boolean,
  jobIds: Number,
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
