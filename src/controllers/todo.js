const Boom = require('boom');
const TodoModel = require('../model/todo.model');

/**
 * function to fetch the todo list
 * @param {*} req
 * @param {*} h
 * @returns
 */
const getTodo = async (req, h) => {
  try {
    const result = await TodoModel.find({ userId: req.user._id });
    return h
      .response({
        status: 'OK!',
        data: result,
      })
      .code(200);
  } catch (err) {
    throw Boom.badRequest(err);
  }
};

/**
 * function to save todo
 */
const createTodo = async (req, h) => {
  const { title, done, priority } = req.payload;
  try {
    const result = await TodoModel.create({
      title, done, priority, date: Date.now(), userId: req.user._id,
    });
    return h
      .response({
        status: 'OK!',
        data: result,
      })
      .code(200);
  } catch (err) {
    throw Boom.badRequest(err);
  }
};

const getTodoByID = async (req, h) => {
  const { id } = req.params;
  const result = await TodoModel.find({ _id: id, userId: req.user._id });
  return h
    .response({
      status: 'OK!',
      data: result,
    })
    .code(200);
};

const changeTodo = async (req, h) => {
  const { title, done, priority } = req.payload;
  const { id } = req.params;
  await TodoModel.findOneAndUpdate({ _id: id, userId: req.user._id }, { title, done, priority });
  return h
    .response({
      status: 'OK!',
      data: 'Change todo successfully',
    })
    .code(200);
};

const deleteTodo = async (req, h) => {
  const { id } = req.params;
  await TodoModel.findOneAndDelete({ _id: id, userId: req.user._id });
  return h
    .response({
      status: 'OK!',
      data: 'Delete todo successfully',
    })
    .code(200);
};

module.exports = {
  getTodo, createTodo, getTodoByID, changeTodo, deleteTodo,
};
