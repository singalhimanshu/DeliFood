const mongoose = require('mongoose')

const DishesModel = mongoose.model('dishes', {
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  popular: { type: Boolean, require: true },
})

module.exports = DishesModel
