
const Boom = require('boom');
const UserModel = require('../model/user.model');
const bcrypt = require('bcrypt');

async function verifyUniqueUser(req) {
  const user = await UserModel.findOne({
    $or: [{email: req.payload.email}, {username: req.payload.username}]
  });
  if (user) {
    if (user.username === req.payload.username) {
      throw Boom.badRequest("Username taken!");
    }
  
    // Check if email exists.
    if (user.email === req.payload.email) {
      throw Boom.badRequest("Email taken!");
    }
  }

  // Check if username exists.
 

  return req;
}
async function verifyCredentials(req) {

  const password = req.payload.password;

  // Find an entry from the database that
  // matches either the email or username
  const user = await UserModel.findOne({
    $or: [
      { email: req.payload.username },
      { username: req.payload.username }
    ]
  })
  if (user) {
    const isValid = await bcrypt.compare(password, user.password)
    if (isValid) {
      return (user);
    }
    else {
      throw (Boom.badRequest('Incorrect password!'));
    }
  } else {
    throw (Boom.badRequest('Incorrect username or email!'));
  }
}

const validate = async (decoded, req) => {
  let user = await UserModel.findOne({ _id: decoded.id });
  if (user) {
    req.user = user;
    return { isValid: true };
  } else {
    return { isValid: false };
  }
};

module.exports = {
  verifyUniqueUser: verifyUniqueUser,
  verifyCredentials: verifyCredentials,
  validate
}