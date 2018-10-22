// requirements: require db/connection as 'mongoose'
const mongoose = require('../controllers/brunch')
// const Donut = new mongoose.Schema


// create your donut schema:

const Brunch = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});
// export the donut model with module.exports

module.exports = mongoose.model('Brunch', Brunch)
// this is the action of Mongoose saying "create a collection called donuts and make it equal to what the Schema says"
// "created donut schema"