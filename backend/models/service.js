const { default: mongoose } = require('mongoose')

const ServiceModel = mongoose.model('services', {
  title: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
})

module.exports = ServiceModel
