const { Item } = require('../../models');

module.exports = {
  Query: {
    items: async () => {
      return Item.find({});
    },
    item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  },
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
};
