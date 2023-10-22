const DishesModel = require('../models/dishes')

const getDishes = async (req, res) => {
  const results = await DishesModel.find({})
  return res.status(200).send(results)
}

const getPopularDishes = async (req, res) => {
  const results = await DishesModel.find({ popular: true })
  return res.status(200).send(results)
}

module.exports = { getDishes, getPopularDishes }
