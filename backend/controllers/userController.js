const { default: mongoose } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

const User = mongoose.model('User', userSchema)
const jwtSecretKey = 'my_secret_key'

const loginUser = async (req, res) => {
  res.send('user has login successfully!!')
}

const resgisterUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required!!' })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, email, password: hashPassword })
    await newUser.save()

    const token = jwt.sign(
      { username: newUser.username, email: newUser.email },
      jwtSecretKey
    )

    res.status(201).json({ message: 'User Registered successfully !!', token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error!!' })
  }
}

module.exports = {
  loginUser,
  resgisterUser,
}
