const { Request } = require('../../models');
const { ApolloError } = require('apollo-server');

module.exports = {
  Mutation: {
    async requestJob(_, { jobRequestInput: { firstName, lastName, email, phone, shipFrom, shipTo, description } }) {
      const newRequest = new Request({
        firstName,
        lastName,
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
    },
    async updateRequest(_, { _id, firstName,
      lastName,
      email,
      phone,
      shipFrom,
      shipTo,
      description }) {
      const updatedRequest = await Request.findByIdAndUpdate(_id, {
        firstName,
        lastName,
        email,
        phone,
        shipFrom,
        shipTo,
        description
      }, {
        new: true,
        runValidators: true,
      });
      if (!updatedRequest) {
        throw new ApolloError('Job not found');
      }
      return updatedRequest;
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
    request: async (parent, { requestId }) => {
      console.log("PassedId", requestId); // PassedId 5f1f1f1f1f1f1f1f1f1f1f1f
      // const request = await Request.findOne({ _id: requestId });
      const request = await Request.findById(requestId);
      console.log("request", request); // Null ???????
      return request

    },
  }
  // requests: (_, { ID }) => Request.findById(ID)
}
