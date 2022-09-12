const { AuthenticationError } = require('apollo-server-express');
const { Customer, Job, Item, Employee } = require('../models');

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find({});
    },

    employee: async (parent, { customerId }) => {
      return Employee.findOne({ _id: customerId });
    },
    customers: async () => {
      return await Customer.find({});
    },

    customer: async (parent, { customerId }) => {
      return await Customer.findOne({ _id: customerId });
    },

    jobs: async () => {
      return Job.find({});
    },

    job: async (parent, { jobId }) => {
      return Job.findOne({ _id: jobId });
    },
    items: async (parent, { jobId }) => {
      return Item.find({ jobID: jobId });
    },

    item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  },

  Mutation: {
    registerUser: async (parent, { firstName, lastName, email, password }) => {
      {
        /* Do input validation
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }
        */
        const oldUser = await User.findOne({ email });

        if (oldUser) {
          throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXISTS');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
          username: username,
          email: email.toLowerCase(),
          password: encryptedPassword
        });

        const token = jwt.sign(
          { user_id: newUser._id, email },
          { expiresIn: "2h" }
        );

        newUser.token = token;

        const res = await newUser.save();

        return {
          id: res.id,
          ...res._doc
        };
      }

      // const user = await Employee.create({ firstName, lastName, email, password })
      // const token = signToken(user);
      // return { token, user };
    },

    addCustomer: async (parent, { firstName, lastName, email, password, phone }) => {
      console.log("data", firstName, lastName, email, password, phone);
      const customer = await Customer.create({
        firstName,
        lastName,
        email,
        password,
        phone
      });
      console.log("customer", customer);
      return customer;
    },
    updateCustomer: async (parent, { _id, firstName, lastName, email, password, phone }) => {
      const customer = await Customer.findOneAndUpdate({ _id: _id }, { firstName, lastName, email, password, phone }, { new: true });
      return customer;
    },
    addEmployee: async (parent, { firstName, lastName, email, password, phone, isAdmin, isActive }) => {
      const employee = await Employee.create({ firstName, lastName, email, password, phone, isAdmin, isActive });
      return employee;
    },
    updateEmployee: async (parent, { _id, firstName, lastName, email, password, phone, isAdmin, isActive }) => {
      const employee = await Employee.findOneAndUpdate({ _id: _id }, { firstName, lastName, email, password, phone, isAdmin, isActive }, { new: true });
      return employee;
    },
    addJob: async (parent, {
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
      ItemIds
    }) => {
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
        ItemIds
      });
      return { job };
    },
    updateJob: async (parent, {
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
      ItemIds
    }) => {
      const job = await Job.findOneAndUpdate({ _id: _id }, {
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
        ItemIds
      });
      return { job };
    },
    addItem: async (parent,
      {
        jobID,
        name,
        value,
        length,
        width,
        height,
        weight,
        qty,
        packType
      }) => {
      const item = await Item.create({
        name,
        value,
        length,
        width,
        height,
        weight,
        qty,
        packType
      });
      return { token, item };
    },
    updateItem: async (parent, { _id, jobID, name, value, length, width, height, weight, qty, packType }) => {
      const item = await Item.findOneAndUpdate({ _id: _id }, {
        name,
        value,
        length,
        width,
        height,
        weight,
        qty,
        packType
      });
      return { item };
    },
    deleteItem: async (parent, { _id }) => {
      const item = await Item.findOneAndDelete({ _id: _id });
      return { item };
    }
  },
};

module.exports = resolvers;

//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Item = model('Item', itemSchema);

// module.exports = Item;
