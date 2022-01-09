const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const Users = require('../users')
const restaurantList = require('../../restaurant.json').results
const db = require('../../config/mongoose')
const SEED_USER = [{
  email: 'user1@example.com',
  password: '12345678',
},
{
  email: 'user2@example.com',
  password: '12345678',
}]
db.once('open', () => {
  Promise.all(Array.from(SEED_USER, (SEED_USER) => {
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(SEED_USER.password, salt))
      .then(hash => Users.create({
          email: SEED_USER.email,
          password: hash
      }))
      .then(user => {
        const userId = user._id
        if (user.email === 'user1@example.com') {
          return Promise.all(Array.from(
            { length: 3 },
            (_, i) => {
              return Restaurant.create({
                name: restaurantList[i].name,
                name_en: restaurantList[i].name_en,
                category: restaurantList[i].category,
                image: restaurantList[i].image,
                location: restaurantList[i].location,
                phone: restaurantList[i].phone,
                google_map: restaurantList[i].google_map,
                rating: restaurantList[i].rating,
                description: restaurantList[i].description,
                userId
              })
            }
          ))
        } else if (user.email === 'user2@example.com') {
          return Promise.all(Array.from(
            { length: 3 },
            (_, i) => {
              return Restaurant.create({
                name: restaurantList[i + 3].name,
                name_en: restaurantList[i + 3].name_en,
                category: restaurantList[i + 3].category,
                image: restaurantList[i + 3].image,
                location: restaurantList[i + 3].location,
                phone: restaurantList[i + 3].phone,
                google_map: restaurantList[i + 3].google_map,
                rating: restaurantList[i + 3].rating,
                description: restaurantList[i + 3].description,
                userId
              })
            }
          ))
        }
      })
  }))
      .then(() => {
        console.log('done.')
        process.exit()
      })
      .catch((error) => console.log(error))
})
