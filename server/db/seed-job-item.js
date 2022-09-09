const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const Job = require('../models/job.model');
const Item = require('../models/item.model');

mongoose
  .connect('mongodb://localhost:27017/wrightandmorrow', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

/* SEED JOBS */
let jobData = [];

for (let i = 0; i < 300; i++) {
  let newJob = {
    description: faker.commerce.productDescription(),
    pickupDate: faker.date.soon(180),
    cost: faker.commerce.price(200, 20000, 0),
    invoice: faker.datatype.number(301),
    status: faker.helpers.arrayElement([
      'Received',
      'Confirmed',
      'Packing',
      'Ready for Ship',
      'Shipped',
      'Delivered',
      'Completed',
      'Issue',
      'Lost',
    ]),
    category: faker.helpers.arrayElement([
      'Industrial',
      'Medical',
      'Technology',
      'Automotive',
      'Retail',
      'Art',
      'Antiques',
      'Furniture',
      'Residential Move',
      'Office Move',
      'Other',
    ]),
    industry: faker.helpers.arrayElement([
      'Personal',
      'Auction',
      'Retail Business',
      'Manufacturer',
      'Other',
    ]),
  };

  jobData.push(newJob);
}

/* SEED ITEMS */
let itemData = [];

for (let i = 0; i < 200; i++) {
  let newItem = {
    name: faker.commerce.product(),
    value: faker.commerce.price(200, 50000, 0),
    length: faker.datatype.float({
      min: 10,
      max: 200,
      precision: 0.01,
    }),
    width: faker.datatype.float({
      min: 10,
      max: 200,
      precision: 0.01,
    }),
    height: faker.datatype.float({
      min: 10,
      max: 200,
      precision: 0.01,
    }),
    weight: faker.datatype.float({
      min: 10,
      max: 500,
      precision: 0.01,
    }),
    packType: faker.helpers.arrayElement([
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
    ]),
  };

  itemData.push(newItem);
}

const seedDB = async () => {
  try {
    await Job.deleteMany({});
    await Job.insertMany(jobData);
    console.log('Successfully seeded Jobs');
    await Item.deleteMany({});
    await Item.insertMany(itemData);
    console.log('Successfully seeded Items');
  } catch (err) {
    console.log(err);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
