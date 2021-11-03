const hapiSwagger = require('hapi-swagger');

const options = {
  info: {
    title: 'Test API Documentation',
    version: '1.0.0',
  },
};


const swagger = {
  plugin: hapiSwagger,
  options: options,
};

module.exports = swagger;