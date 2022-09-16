const { Customer } = require('../../models');

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
    addCustomer: async (
      parent,
      { firstName, lastName, email, phone }
    ) => {
      console.log('data', firstName, lastName, email, phone);
      const customer = await Customer.create({
        firstName,
        lastName,
        email,
        phone,
      });

      console.log('customer', customer);
      return customer;
    },
    updateCustomer: async (
      parent,
      { _id, firstName, lastName, email, phone }
    ) => {
      const customer = await Customer.findOneAndUpdate(
        { _id: _id },
        { firstName, lastName, email, phone },
        { new: true }
      );
      return customer;
    },
  },
};
