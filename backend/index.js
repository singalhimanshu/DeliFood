const express = require('express')
const app = express()
const port = 3000

const product = require('./routes/productRouter')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api', product)
// app.get('/products', (req, res) => {
//   res.send(data)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
