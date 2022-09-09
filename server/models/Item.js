const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
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
  qty: {
    type: Number,
  },
  packType: {
    type: String,
  },
  jobID: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;