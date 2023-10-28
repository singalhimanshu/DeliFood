const mongoose = require('mongoose')

const UserModel = mongoose.model('users', {
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { true: String, required: true },
})

module.exports = UserModel
