const { Request } = require('../../models');
const { ApolloError } = require('apollo-server');

module.exports = {
  Mutation: {
    async requestJob(_, { jobRequestInput: { email, phone, industry, shipFrom, shipTo, category, description } }) {
      const newRequest = new Request({
        email,
        phone,
        industry,
        shipFrom,
        shipTo,
        category,
        description
      });
      // Save request to database
      const res = await newRequest.save();
      // return request
      console.log(res);
      return {
        id: res.id,
        ...res._doc,
      }
    }
  },
  Query: {
  },
  // requests: (_, { ID }) => Request.findById(ID)
}
