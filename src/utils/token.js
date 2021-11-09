const jwt = require('jsonwebtoken');
const secret = require('../config');

function createToken(user) {
  // Sign the JWT
  return jwt.sign({ id: user._id, username: user.username, email: user.email }, secret, { algorithm: 'HS256', expiresIn: "10000h" } );
}

module.exports = createToken;