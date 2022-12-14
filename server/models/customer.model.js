const mongoose = require('mongoose');

const { Schema } = mongoose;
// const bcrypt = require('bcrypt');

// Schema for Address only
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

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  billingAddress: [addressSchema],
});

// set up pre-save middleware to create password
// customerSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
//   next();
// });

// compare the incoming password with the hashed password
// customerSchema.methods.isCorrectPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
