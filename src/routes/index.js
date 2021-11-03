const healthRoutes = require('./health');
const notFound = require('./not-found');
const todo = require('./todo');


module.exports = [
  ...healthRoutes,
  ...notFound,
  ...todo
];
