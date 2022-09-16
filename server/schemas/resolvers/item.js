const { Employee } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ApolloError } = require('apollo-server');




module.exports = {
  Mutation: {
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
    deleteItem: async (parent, { _id }) => {
      const item = await Item.findOneAndDelete({ _id: _id });
      return { item };
    },
  },
  Query: {
    items: async (parent, { jobId }) => {
      return Item.find({ jobID: jobId });
    },
    item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  }
}