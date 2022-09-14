const employeeResolvers = require('./employee.js');
const jobResolvers = require('./job.js');

module.exports = {
  Query: {
    ...employeeResolvers.Query,
    ...jobResolvers.Query,
  },
  Mutation: {
    ...employeeResolvers.Mutation,
    ...jobResolvers.Mutation
  }
}