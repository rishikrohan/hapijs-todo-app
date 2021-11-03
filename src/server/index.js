require('dotenv').config();
const Hapi = require('@hapi/hapi');
const plugins = require('../plugins');
const routes = require('../routes');

require('dotenv').config();

const setupServer = async () => {
  const server = await new Hapi.server({
    port: process.env.NODE_PORT || 3000,
    host: process.env.NODE_HOST,
    debug: false,
    routes: {
      cors: {
        origin: ['*'], // an array of origins or 'ignore'
        credentials: true // boolean - 'Access-Control-Allow-Credentials'
      }
    }
    
  });

  server.log(['subsystem'], 'third way for accessing it')
  await server.register(plugins);

  await server.route(routes);
  return server;
};

module.exports = {
  setupServer
};
