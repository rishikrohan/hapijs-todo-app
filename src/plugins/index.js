const pino = require('./hapi-pino.js');
const swagger = require('./hapi-swagger.js');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const pluginsList = [
  pino,
  swagger,
  Inert,
  Vision
];

module.exports = pluginsList;