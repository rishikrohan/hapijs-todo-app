const Joi = require('joi');
const { getTodo, createTodo } = require('../controllers/todo');
const TodoModel = require('../model/todo.model');

const payloadValidate = {
  payload: Joi.object({
      title: Joi.string().min(1).max(140),
      done: Joi.boolean()
  }),
}
const responseValidate = {
  schema: Joi.array().items(TodoModel),
  failAction: 'log'
}
module.exports = [
  {
    method: 'GET',
    path: '/todo',
    options: {
      auth: false,
      tags: ['api', 'todo'],
      response: responseValidate
    },
    handler: getTodo
  },
  {
    method: 'POST',
    path: '/todo',
    options: {
      auth: false,
      tags: ['api', 'todo'],
      validate: payloadValidate
    },
    handler: createTodo,
  }
];
