const { getTodo, createTodo } = require('../controllers/todo');


module.exports = [
  {
    method: 'GET',
    path: '/todo',
    options: {
      auth: false,
      tags: ['api', 'todo'],
    },
    handler: getTodo
  },
  {
    method: 'GET',
    path: '/todos',
    options: {
      auth: false,
      tags: ['api', 'todo'],
    },
    handler: createTodo
  }
];
