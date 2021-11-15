const Joi = require('joi');
const { createUser, loginUser, getAllUser } = require('../controllers/user');
const { verifyCredentials, verifyUniqueUser } = require('../utils/userFunction');

const registerUserSchema = Joi.object({
  username: Joi.string().min(6).max(50),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(8).max(50),
});

const authenticateUserSchema = Joi.alternatives().try(
  Joi.object({
    username: Joi.string().alphanum().min(6).max(30)
      .required(),
    password: Joi.string().required(),
  }),
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(50).required(),
  }),
);

const registerValidate = {
  validate: {
    payload: registerUserSchema,
  },
};

const loginValidate = {
  validate: {
    payload: authenticateUserSchema,
  },
};

module.exports = [
  {
    method: 'POST',
    path: '/user/register',
    options: {
      auth: false,
      tags: ['api', 'user'],
      pre: [
        { method: verifyUniqueUser, failAction: 'error' },
      ],

      ...registerValidate,
    },
    handler: createUser,
  },
  {
    method: 'POST',
    path: '/user/login',
    options: {
      auth: false,
      tags: ['api', 'user'],
      pre: [
        { method: verifyCredentials, assign: 'user' },
      ],
      ...loginValidate,
    },
    handler: loginUser,
  },
  {
    method: 'GET',
    path: '/user',
    options: {
      auth: false,
      tags: ['api', 'user'],
    },
    handler: getAllUser,
  },
];
