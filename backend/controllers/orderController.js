const { default: mongoose } = require('mongoose')

const orderSchema = new mongoose.Schema({
  user: {},
  ordereditems: [],
})

const Order = mongoose.model('Order', orderSchema)

const createOrder = async (req, res) => {
  try {
    const { user, ordereditems } = req.body
    console.log(user)
    console.log(ordereditems)
    const newOrder = new Order({ user, ordereditems })
    await newOrder.save()
    console.log(`order request: ${JSON.stringify(req.body)}`)
    res.status(201).json({ message: 'Order created' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createOrder }
