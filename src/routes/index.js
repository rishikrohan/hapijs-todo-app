const healthRoutes = require('./health');
const notFound = require('./not-found');
const todo = require('./todo');
const user = require('./user');

module.exports = [
  ...healthRoutes,
  ...notFound,
  ...todo,
  ...user,
];
