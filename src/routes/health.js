const Joi = require('joi');
const { health } = require('../controllers/health');

module.exports = [
  {
    method: 'GET',
    path: '/health',
    options: {
      auth: false,
      tags: ['api', 'health']
    },
    handler: health
  }
];
