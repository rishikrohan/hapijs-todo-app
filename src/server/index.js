require('dotenv').config();
const Hapi = require('@hapi/hapi');
const plugins = require('../plugins');
const routes = require('../routes');
const secret = require('../config');
require('dotenv').config();
const { validate } = require('../utils/userFunction');

const setupServer = async () => {
  const server = await new Hapi.Server({
    port: process.env.NODE_PORT || 3000,
    host: process.env.NODE_HOST,
    debug: false,
    routes: {
      cors: {
        origin: ['*'], // an array of origins or 'ignore'
        credentials: true, // boolean - 'Access-Control-Allow-Credentials'
      },
    },

  });

  server.log(['subsystem'], 'third way for accessing it');
  await server.register(plugins);
  server.auth.strategy('jwt', 'jwt', {
    key: secret,
    validate,
    verifyOptions: { algorithms: ['HS256'] },
  });

  server.auth.default('jwt');
  await server.route(routes);

  return server;
};

module.exports = {
  setupServer,
};
