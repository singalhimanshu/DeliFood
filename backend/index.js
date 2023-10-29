const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

var { expressjwt: ejwt } = require('express-jwt')
const localURL = 'mongodb://127.0.0.1:27017/fooddelivery'
const app = express()
const port = process.env.PORT || 8080
const jwtSecretKey = 'my_secret_key'
const url =
  'mongodb+srv://deeptichauhanofficial:fHmPLFA6xNiSN15A@cluster0.vzm4idi.mongodb.net/Cluster0?retryWrites=true&w=majority'

const product = require('./routes/productRouter')
const dish = require('./routes/dishRouter')
const service = require('./routes/serviceRouter')

mongoose
.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

app.use(express.json())
app.use(cors())


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

/*
  METHOD : POST
  -----------------------------------------
  registerUser           -  /api/register
  placeOrder             -  /api/orders
  loginUser              -  /api/login
  -----------------------------------------
*/

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
