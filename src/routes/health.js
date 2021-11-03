const Joi = require('joi');
const { health } = require('../controllers/health');

const validate =  {
  params: Joi.object({
    value: Joi.number().integer().min(1).max(100).default(10)
  })
}
module.exports = [
  {
    method: 'GET',
    path: '/health',
    options: {
      auth: false,
      tags: ['api', 'health'],
      validate
    },
    handler: health
  }
];
