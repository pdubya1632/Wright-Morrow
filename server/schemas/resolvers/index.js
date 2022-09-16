const employeeResolvers = require('./employee.js');
const jobResolvers = require('./job.js');
const customerResolvers = require('./customer.js');
const requestResolvers = require('./request.js');

module.exports = {
  Query: {
    ...employeeResolvers.Query,
    ...jobResolvers.Query,
    ...customerResolvers.Query,
    ...requestResolvers.Query,
  },
  Mutation: {
    ...employeeResolvers.Mutation,
    ...jobResolvers.Mutation,
    ...customerResolvers.Mutation,
    ...requestResolvers.Mutation
  }
}