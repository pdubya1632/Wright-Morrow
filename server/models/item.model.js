const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
  length: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: String,
  },
  qty: {
    type: Int,
  },
  packType: {
    type: String,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
