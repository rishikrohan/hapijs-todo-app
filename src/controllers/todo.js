const TodoModel = require('../model/todo.model');

/**
 * function to fetch the todo list
 * @param {*} req
 * @param {*} h
 * @returns
 */
const getTodo = async (req, h) => {
  req.logger.info('In handler %s', req.path)
  const result = await TodoModel.find();
  return h
    .response({
      status: 'OK!', 
      data: result
    })
    .code(200);
};

/**
 * function to save todo
 */
const createTodo = (req, h) => {
  const {title, done} = req.payload
  const result = TodoModel.create({ title, done });
  return result;
}

module.exports = { getTodo, createTodo };
