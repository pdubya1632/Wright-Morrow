const employeeResolvers = require('./employee.js');
const jobResolvers = require('./job.js');
const customerResolvers = require('./customer.js');
const requestResolvers = require('./request.js');
const itemResolvers = require('./item.js');

module.exports = {
  Query: {
    ...employeeResolvers.Query,
    ...jobResolvers.Query,
    ...customerResolvers.Query,
    ...itemResolvers.Query,
    ...requestResolvers.Query,
  },
  Mutation: {
    ...employeeResolvers.Mutation,
    ...jobResolvers.Mutation,
    ...customerResolvers.Mutation,
    ...requestResolvers.Mutation,
  },
};
