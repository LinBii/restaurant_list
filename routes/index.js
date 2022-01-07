const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

router.use('/', home)
router.use('/restaurants', restaurants)

router.use('/', function (req, res) {
  res.status(404)
  res.render('404')
  return
})

module.exports = router
