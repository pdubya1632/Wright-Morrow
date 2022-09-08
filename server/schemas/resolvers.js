const { AuthenticationError } = require('apollo-server-express');
const { Customer, Job, Item, Employee } = require('../models');

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find({});
    },

    employee: async (parent, { customerId }) => {
      return Employee.findOne({ _id: customerId });
    },
    customers: async () => {
      return await Customer.find({});
    },

    customer: async (parent, { customerId }) => {
      return await Customer.findOne({ _id: customerId });
    },

    jobs: async () => {
      return Job.find({});
    },

    job: async (parent, { jobId }) => {
      return Job.findOne({ _id: jobId });
    },
    items: async (parent, { jobId }) => {
      return Item.find({ jobID: jobId });
    },

    item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  },

  Mutation: {
    addCustomer: async (parent, { firstName, lastName, email, password, phone }) => {
      const customer = await Customer.create({ firstName, lastName, email, password, phone }, { new: true });
      return { customer };
    },
    updateCustomer: async (parent, { _id, firstName, lastName, email, password, phone }) => {
      const customer = await Customer.findOneAndUpdate({ firstName, lastName, email, password, phone });
      const token = signToken(profile);
      return { token, profile };
    },
    addEmployee: async (parent, { firstName, lastName, email, password, phone, isAdmin }) => {
      const profile = await Employee.create({ firstName, lastName, email, password, phone });
      const token = signToken(profile);
      return { token, profile };
    },
    addJob: async (parent, { customerId, industry, category, phone, isAdmin }) => {
      const profile = await Job.create({ firstName, lastName, email, password, phone });
      const token = signToken(profile);
      return { token, profile };
    },
    addItem: async (parent, { jobID, name, value, length, width, height, weight, qty, packType }) => {
      const profile = await Item.create({ name, value, length, width, height, weight, qty, packType });
      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;
