const Boom = require('boom');
const UserModel = require('../model/user.model');
const hashPassword = require('../utils/hashPassword')
const createToken = require('../utils/token');

const createUser = async (req, h) => {
  const {username, password, email} = req.payload
  let user = new UserModel();
  try {
    const hash = await hashPassword(password)
    user = await UserModel.create({ username, password: hash, email });
    return h
    .response({
      status: 'OK!', 
      data: { id_token: createToken(user) }
    })
    .code(201);
  }
  catch(err) {
    throw Boom.badRequest(err);
  }
  
}

const loginUser = async (req, h) => {
  return h
    .response({
      status: 'OK!', 
      data: { id_token: createToken(req.pre.user) }
    })
    .code(201);
}

const getAllUser = async (req, h) => {
  const result = await UserModel.find();
  return h
    .response({
      status: 'OK!', 
      data: result
    })
    .code(200);
}

module.exports = { createUser, loginUser, getAllUser };
