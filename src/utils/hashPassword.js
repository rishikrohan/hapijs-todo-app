const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  // Generate a salt at level 10 strength
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  return hash
}

module.exports = hashPassword