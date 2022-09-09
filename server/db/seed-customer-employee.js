const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const Customer = require('../models/customer.model');
const Employee = require('../models/employee.model');

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

/* SEED CUSTOMERS */
let customerData = [];

for (let i = 0; i < 200; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  let newCustomer = {
    firstName,
    lastName,
    email: faker.internet.email(firstName, lastName),
    phone: faker.phone.number('###-###-###'),
    password: faker.internet.password(),
    billingAddress: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
    jobIds: null,
  };

  customerData.push(newCustomer);
}

/* SEED EMPLOYEES */
let employeeData = [];

for (let i = 0; i < 100; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  let newEmployee = {
    firstName,
    lastName,
    email: `${firstName}@wrightandmorrow.com`,
    phone: faker.phone.number('206-###-###'),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
    password: faker.internet.password(),
    isAdmin: faker.datatype.boolean(),
    active: faker.datatype.boolean(),
    jobIds: null,
  };

  employeeData.push(newEmployee);
}

const seedDB = async () => {
  try {
    await Customer.deleteMany({});
    await Customer.insertMany(customerData);
    console.log('Successfully seeded customers');
    await Employee.deleteMany({});
    await Employee.insertMany(employeeData);
    console.log('Successfully seeded employees');
  } catch (err) {
    console.log(err);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
