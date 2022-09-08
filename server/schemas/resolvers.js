const { AuthenticationError } = require('apollo-server-express');
const { Customer, Job, Item, Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    employees: async () => {
      return Employee.find({});
    },

    employee: async (parent, { customerId }) => {
      return Employee.findOne({ _id: customerId });
    },
    customers: async () => {
      return Customer.find({});
    },

    customer: async (parent, { customerId }) => {
      return Customer.findOne({ _id: customerId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return Customer.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
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
      const profile = await Customer.create({ firstName, lastName, email, password, phone });
      const token = signToken(profile);
      return { token, profile };
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
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addSkill: async (parent, { profileId, skill }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { skills: skill },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeSkill: async (parent, { skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
