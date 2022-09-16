const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Job {
    _id: ID!
    jobId: String
    customerId: String
    employeeId: String
    status: String
    pickupDate: String
    pickupAddress: [Address]
    shipFrom: String
    shipTo: String
    dropOffAddress: [Address]
    industry: String
    category: String
    description: String
    cost: String
    tracking: String
    invoice: String
    ItemIds: [Item]
  }

  type Address {
    _id: ID!
    street: String
    city: String
    state: String
    zip: String
  }

  type Item {
    _id: ID!
    jobID: [Job]
    name: String
    value: String
    length: String
    width: String
    height: String
    weight: String
    qty: Int
    packType: String
  }
  type Customer {
    _id: ID!
    firstName: String
    lastName: String
    phone: String
    email: String
    password: String
    billingAddress: [Address]
    jobIDs: [Job]
  }
  type Employee {
    _id: ID!
    firstName: String
    lastName: String
    phone: String
    email: String
    address: [Address]
    password: String
    isAdmin: Boolean
    isActive: Boolean
    jobIDs: [Job]
    token: String
  }

  type Auth {
    token: ID
    employee: Employee
  }
  type Request {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    industry: String
    shipFrom: String
    shipTo: String
    category: String
    description: String
  }
  #29.1
  input JobRequestInput {
    firstName: String
    lastName: String
    email: String
    phone: String
    shipFrom: String
    shipTo: String
    description: String
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    phone: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  # ADD CUSTOMER
  input CustomerInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    billingAddress: AddressInput
  }

  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Query {
    customers: [Customer]
    customer(customerId: ID!): Customer
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Customer
    jobs: [Job]!
    job(jobId: ID!): Job
    employees: [Employee]!
    employee(employeeId: ID!): Employee
    items: [Item]!
    item(itemId: ID!): Item
  }

  type Mutation {
    registerUser(registerInput: RegisterInput): Employee
    requestJob(jobRequestInput: JobRequestInput!): Request
    addCustomer(
      firstName: String
      lastName: String
      phone: String!
      email: String!
      password: String
      jobIDs: String
    ): Customer
    updateCustomer(
      _id: ID!
      firstName: String
      lastName: String
      phone: String
      email: String
      password: String
      jobIDs: String
    ): Customer
    addEmployee(
      firstName: String!
      lastName: String!
      phone: String!
      email: String!
      password: String!
      jobIDs: String
      isAdmin: Boolean
    ): Employee
    updateEmployee(
      _id: ID!
      firstName: String
      lastName: String
      phone: String
      email: String
      password: String
      jobIDs: String
      isAdmin: Boolean
    ): Employee
    addJob(
      customerId: String
      employeeId: String
      status: String
      pickupDate: String
      pickupAddress: String
      dropOffAddress: String
      industry: String
      description: String
      category: String
      cost: String
      invoice: Int
      ItemIds: String
    ): Job
    updateJob(
      _id: ID!
      customerId: String
      employeeId: String
      status: String
      pickupDate: String
      pickupAddress: String
      dropOffAddress: String
      industry: String
      category: String
      cost: String
      invoice: Int
      ItemIds: String
    ): Job
    deleteJob(_id: ID!): Job
    addItem(
      _id: ID!
      jobID: String
      name: String
      value: String
      length: String
      width: String
      height: String
      weight: String
      qty: Int
      packType: String
    ): Item
    updateItem(
      _id: ID!
      jobID: String
      name: String
      value: String
      length: String
      width: String
      height: String
      weight: String
      qty: Int
      packType: String
    ): Item
    deleteItem(_id: ID!): Item

    loginUser(loginInput: LoginInput): Employee
  }
`;

module.exports = typeDefs;
