const hapiPino = require('hapi-pino');


const options = {
  prettyPrint: process.env.NODE_ENV !== 'production',
  // Redact Authorization headers, see https://getpino.io/#/docs/redaction
  redact: ['req.headers.authorization']
};

const pino = {
  plugin: hapiPino,
  options: options,
};

module.exports = pino;