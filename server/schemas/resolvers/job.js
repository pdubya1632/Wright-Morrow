const { Job } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ApolloError } = require('apollo-server');



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
    addJob: async (
      parent,
      {
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
      const job = await Job.create({
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
      });
      return { job };
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
    }
  }
}