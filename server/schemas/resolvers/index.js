const employeeResolvers = require('./employee.js');
const jobResolvers = require('./job.js');
const customerResolvers = require('./customer.js');

module.exports = {
  Query: {
    ...employeeResolvers.Query,
    ...jobResolvers.Query,
    ...customerResolvers.Query,
  },
  Mutation: {
    ...employeeResolvers.Mutation,
    ...jobResolvers.Mutation,
    ...customerResolvers.Mutation
  }
}