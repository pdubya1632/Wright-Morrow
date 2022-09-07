const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Job {
    _id: ID!
    customerId: String
    employeeId: String
    status: String
    pickupDate: String
    pickupAddress:[Address]
    dropOffAddress:[Address]
    industry: String
    category: String
    description: String
    cost: String
    invoice: number
    ItemIds: [Item],
  }
  type Address {
    _id: ID!
    street: String
    city: String
    state: String
    zip: String

  }

  type Item{
    _id: ID!
  jobID: [Job]
  name: String
  value: String
  length: String
  width: String
  height: String
  weight: String
  qty:  Number
  packType: String
  }

  type Customer {
    _id: ID!
  name: String
  phone: String
  email: String
  password: String
  billingAddress: [Address]
  jobIDs: [Job]
  }
  type Employee {
    _id: ID!
  name: String
  phone: String
  email: String
  password: String
  isAdmin: Boolean
  active: Boolean
  jobIDs: [Job]
  }
  
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    customers: [Customer]!
    customer(customerId: ID!): Customer
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Customer
    jobs: [Job]!
    job(jobId: ID!): Job
    employees: [Employee]!
    employee(employeeId: ID!): Employee
  }

  type Mutation {
    addCustomer(
      firstName: String!
      lastName: String! 
      phone: String!, 
      email: String!, 
      password: String! 
      jobIDs:  String!
      ): Customer
    updateCustomer(
      firstName: String!
      lastName: String! 
      phone: String!
      email: String!
      password: String! 
      jobIDs:  String!
      ): Customer
    addEmployee(
      firstName: String!
      lastName: String!  
      phone: String!
      email: String!
      password: String!
      jobIDs:  String!
      isAdmin:Boolean!
      ): Employee
    updateEmployee(
      firstName: String!
      lastName: String! 
      phone: String!, 
      email: String!, 
      password: String!, 
      jobIDs:  String!,
      isAdmin:Boolean!
      ): Employee
    addJob(  _id: ID!
      customerId: String
      employeeId: String
      status: String
      pickupDate: String
      pickupAddress:[Address]
      dropOffAddress:[Address]
      industry: String
      description: String
      category: String
      cost: String
      invoice: number
      ItemIds: String
      ): Job
      updateJob(
      _id: ID!
      customerId: String
      employeeId: String
      status: String
      pickupDate: String
      pickupAddress:[Address]
      dropOffAddress:[Address]
      industry: String
      category: String
      cost: String
      invoice: number
      ItemIds: String
      ): Job
    addItem(  
      _id: ID!
      jobID: [Job]
      name: String
      value: String
      length: String
      width: String
      height: String
      weight: String
      qty:  Number
      packType: String
      ) : Item
      updateItem(
        _id: ID!
      jobID: [Job]
      name: String
      value: String
      length: String
      width: String
      height: String
      weight: String
      qty:  Number
      packType: String
      ) : Item
  }
`;

module.exports = typeDefs;
