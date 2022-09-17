const { Request } = require('../../models');
const { ApolloError } = require('apollo-server');

module.exports = {
  Mutation: {
    async requestJob(_, { jobRequestInput: { email, phone, shipFrom, shipTo, description } }) {
      const newRequest = new Request({
        email,
        phone,
        shipFrom,
        shipTo,
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

    requests: async () => {
      try {
        const requests = await Request.find({});
        return requests;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    request: async (parent, { jobId }) => {
      return Request.findOne({ _id: jobId });
    },
  }
  // requests: (_, { ID }) => Request.findById(ID)
}
