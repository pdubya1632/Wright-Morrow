const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
  },
  length: {
    type: Number,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  // should qty be pushed to job model?
  qty: {
    type: Number,
  },
  packType: {
    type: String,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
