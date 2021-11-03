const pino = require('./hapi-pino.js');
const swagger = require('./hapi-swagger.js');
const inert = require('@hapi/inert');
const vision = require('@hapi/vision');

const pluginsList = [
  pino,
  swagger,
  inert,
  vision
];

module.exports = pluginsList;