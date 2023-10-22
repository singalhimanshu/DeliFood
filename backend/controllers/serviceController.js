const ServiceModel = require('../models/service')

const getServices = async (req, res) => {
  const result = await ServiceModel.find({})
  return res.status(200).send(result)
}

module.exports = { getServices }
