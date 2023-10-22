const express = require('express')

const router = express.Router()

const { getDishes, getPopularDishes } = require('../controllers/dishController')

router.get('/dishes', getDishes)
router.get('/dishes/popular', getPopularDishes)

module.exports = router
