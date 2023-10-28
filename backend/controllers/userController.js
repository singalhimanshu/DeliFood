const UserModel = require('../models/user')

const loginUser = async (req, res) => {
  res.send('user has login successfully!!')
}

const resgisterUser = async (req, res) => {
  res.send('user has registered successfully!!')
}

module.exports = {
  loginUser,
  resgisterUser,
}
