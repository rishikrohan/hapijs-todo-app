const Joi = require('joi');
const { getTodo, createTodo, getTodoByID, changeTodo, deleteTodo } = require('../controllers/todo');
const TodoModel = require('../model/todo.model');



const todoSchema = Joi.object({
  title: Joi.string().min(1).max(140).required(),
  done: Joi.boolean().required(),
  priority: Joi.number().min(1).max(5).required(),
})

const todoIDSchema = Joi.object({
  id: Joi.string().min(1).max(140),
})

const createTodoValidate = {
  validate: {
    payload: todoSchema,
  }
}

const getTodoValidate = {
  response: {
    schema: Joi.array().items(TodoModel),
    failAction: 'log'
  }
}

const getTodoByIDValidate = {
  response: getTodoValidate.response,
  validate: {
    params: todoIDSchema
  }
}

const changeTodoValidate = {
  validate: {
    params: todoIDSchema,
    payload: todoSchema,
  }
}

const deleteTodoValidate = {
  validate: {
    params: todoIDSchema
  }
}
module.exports = [
  {
    method: 'GET',
    path: '/todo',
    options: {
      auth: { strategy: 'jwt'},
      tags: ['api', 'todo'],
      ...getTodoValidate
    },
    handler: getTodo
  },
  {
    method: 'GET',
    path: '/todo/{id}',
    options: {
      auth: { strategy: 'jwt'},
      tags: ['api', 'todo'],
      ...getTodoByIDValidate
    },
    handler: getTodoByID,
  },
  {
    method: 'POST',
    path: '/todo',
    options: {
      auth: { strategy: 'jwt'},
      tags: ['api', 'todo'],
      ...createTodoValidate
    },
    handler: createTodo,
  },
  {
    method: 'PUT',
    path: '/todo/{id}',
    options: {
      auth: { strategy: 'jwt'},
      tags: ['api', 'todo'],
      ...changeTodoValidate
    },
    handler: changeTodo,
  },
  {
    method: 'DELETE',
    path: '/todo/{id}',
    options: {
      auth: { strategy: 'jwt'},
      tags: ['api', 'todo'],
      ...deleteTodoValidate
    },
    handler: deleteTodo,
  },
  
];
