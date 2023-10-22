const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = 8080

const product = require('./routes/productRouter')
const dish = require('./routes/dishRouter')
const service = require('./routes/serviceRouter')
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/fooddelivery')

var db = mongoose.connection

db.on('connected', () => {
  console.log('mongodb connected...')
})
db.on('error', () => {
  console.log('mongodb connection failed...')
})

app.use(cors())
// app.use('/signin', (req, res) => {
//   res.send({
//     token: 'test123',
//   })
// })

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api', product)
app.use('/api', dish)
app.use('/api', service)

// app.get('/products', (req, res) => {
//   res.send(data)
// })

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`)
})
