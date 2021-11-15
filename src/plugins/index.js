const inert = require('@hapi/inert');
const vision = require('@hapi/vision');
const auth = require('hapi-auth-jwt2');
const swagger = require('./hapi-swagger');
const pino = require('./hapi-pino');

const pluginsList = [
  pino,
  swagger,
  inert,
  vision,
  auth,
];

module.exports = pluginsList;
