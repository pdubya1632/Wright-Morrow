const { Customer } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ApolloError } = require('apollo-server');


module.exports = {
  Query: {
    customers: async () => {
      return await Customer.find({});
    },
    customer: async (parent, { customerId }) => {
      return await Customer.findOne({ _id: customerId });
    },
  },
  Mutation: {
    addCustomer: async (parent, { firstName, lastName, email, password, phone }) => {
      console.log("data", firstName, lastName, email, password, phone);
      const customer = await Customer.create({
        firstName,
        lastName,
        email,
        password,
        phone
      });

      console.log('customer', customer);
      return customer;
    },
    updateCustomer: async (
      parent,
      { _id, firstName, lastName, email, password, phone }
    ) => {
      const customer = await Customer.findOneAndUpdate(
        { _id: _id },
        { firstName, lastName, email, password, phone },
        { new: true }
      );
      return customer;
    },
  }
}