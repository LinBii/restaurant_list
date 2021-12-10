const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// 瀏覽全部餐廳
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

// 搜尋特定餐廳
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()

  if (keyword === '') {
    res.redirect('/')
    return
  }

  Restaurant.find()
    .lean()
    .then(restaurants => {
      const filteredData = restaurants.filter(
        data =>
          data.category.toLowerCase().includes(keyword) || data.name.toLowerCase().includes(keyword)
      )
      res.render('index', { restaurants: filteredData, keyword })
    })
    .catch(error => console.log(error))
})



module.exports = router