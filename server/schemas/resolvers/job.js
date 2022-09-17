const { Job } = require('../../models');

module.exports = {
  Query: {
    jobs: async () => {
      return Job.find({});
    },
    job: async (parent, { jobId }) => {
      return Job.findOne({ _id: jobId });
    },
  },
  Mutation: {
    async addJobNew(_, { addJobInput: { status,
      pickupDate,
      shipFrom,
      shipTo,
      industry,
      category,
      description,
      cost, } }) {
      const newJob = new Job({
        status,
        pickupDate,
        shipFrom,
        shipTo,
        industry,
        category,
        description,
        cost,
      });
      // Save request to database
      const res = await newJob.save();
      // return request
      console.log(res);
      return {
        id: res.id,
        ...res._doc,
      }
    },
    updateJob: async (
      parent,
      {
        _id,
        customerId,
        industry,
        employeeId,
        category,
        phone,
        isAdmin,
        status,
        pickupDate,
        pickupAddress,
        dropOffAddress,
        description,
        cost,
        invoice,
        ItemIds,
      }
    ) => {
      const job = await Job.findOneAndUpdate(
        { _id: _id },
        {
          customerId,
          industry,
          employeeId,
          phone,
          isAdmin,
          status,
          pickupDate,
          pickupAddress,
          dropOffAddress,
          category,
          description,
          cost,
          invoice,
          ItemIds,
        }
      );
      return { job };
    },
    addItem: async (
      parent,
      {
        jobID,
        name,
        value,
        length,
        width,
        height,
        weight,
        qty,
        packType,
      }
    ) => {
      const item = await Item.create({
        name,
        value,
        length,
        width,
        height,
        weight,
        qty,
        packType,
      });
      return { token, item };
    },
    updateItem: async (
      parent,
      {
        _id,
        jobID,
        name,
        value,
        length,
        width,
        height,
        weight,
        qty,
        packType,
      }
    ) => {
      const item = await Item.findOneAndUpdate(
        { _id: _id },
        {
          name,
          value,
          length,
          width,
          height,
          weight,
          qty,
          packType,
        }
      );
      return { item };
    },
  },
};
