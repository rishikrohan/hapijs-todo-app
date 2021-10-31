const healthRoutes = require('./health');
const notFound = require('./not-found');


module.exports = [
  ...healthRoutes,
  ...notFound,
];
