// requirements: require db/connection as 'mongoose'
const mongoose = require('../controllers/brunch')



const Brunch = new mongoose.Schema({
  title: String,
  description: String,
  instructions: String,
  ingredients: Number
})

module.exports = mongoose.model('Brunch', Brunch)
// this is the action of Mongoose saying "create a collection called brunch and make it equal to what the Schema says"
