const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var { expressjwt: ejwt } = require('express-jwt')
const url =
  'mongodb+srv://deeptichauhanofficial:y@RQTPpZyWJ6@6h@cluster0.vzm4idi.mongodb.net/?retryWrites=true&w=majority'
const localURL = 'mongodb://127.0.0.1:27017/fooddelivery'
const app = express()
const port = process.env.PORT || 8080

const product = require('./routes/productRouter')
const dish = require('./routes/dishRouter')
const service = require('./routes/serviceRouter')

mongoose.connect(url)

var db = mongoose.connection

db.on('connected', () => {
  console.log('mongodb connected...')
})
db.on('error', () => {
  console.log('mongodb connection failed...')
})

app.use(express.json())
app.use(cors())

// app.use('/signin', (req, res) => {
//   res.send({
//     token: 'test123',
//   })
// })

// sample api
app.get('/', (req, res) => {
  res.send('Hello World')
})

/*
  METHOD : GET
  -----------------------------------------
  product         -  /api/products
  dish            -  /api/dishes
  popular dishes  -  /api/dishes/popular
  service         -  /api/services
  -----------------------------------------
*/

app.use('/api', product)
app.use('/api', dish)
app.use('/api', service)

// app.get('/products', (req, res) => {
//   res.send(data)
// })
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

const User = mongoose.model('User', userSchema)
const jwtSecretKey = 'my_secret_key'

app.post('/api/register', async (req, res) => {
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
})

// JWT authentication middleware
app.use(
  ejwt({ secret: jwtSecretKey, algorithms: ['HS256'] }).unless({
    path: [
      '/api/register',
      '/api/orders',
      // Exempt the login route from JWT authentication
      // Add more exempted routes if needed
    ],
  })
)

app.use('/api/orders', require('./routes/orderRouter'))

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`)
})
