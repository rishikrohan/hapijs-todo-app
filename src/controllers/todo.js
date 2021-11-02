const TodoModel = require('../model/todo.model');

/**
 * function to fetch the todo list
 * @param {*} req
 * @param {*} h
 * @returns
 */
const getTodo = async (req, h) => {
  req.logger.info('In handler %s', req.path)

  return h
    .response({
      status: 'OK!',
      data: 'exercise'
    })
    .code(200);
};

/**
 * function to save todo
 */
const createTodo = (req, h) => {
  const result = TodoModel.create({ title: "AWS", done: false });
  return result;
}

module.exports = { getTodo, createTodo };
