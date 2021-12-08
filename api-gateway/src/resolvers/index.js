const bookingResolver = require('./booking_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(bookingResolver, authResolver);

module.exports = resolvers;