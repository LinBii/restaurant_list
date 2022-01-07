const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')

router.use('/restaurants', restaurants)
router.use('/users', users)
router.use('/', home)

router.use('/', function (req, res) {
  res.status(404)
  res.render('404')
  return
})

module.exports = router
