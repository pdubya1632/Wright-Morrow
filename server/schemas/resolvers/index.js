const employeeResolvers = require('./employee.js');

module.exports = {
  Query: {
    ...employeeResolvers.Query,
  },
  Mutation: {
    ...employeeResolvers.Mutation
  }
}