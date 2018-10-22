<<<<<<< HEAD
// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Brunch = new Schema({
  title: String,
  description: String,
  instructions: String,
  ingredients: String  
});
=======
// requirements: require db/connection as ‘mongoose’
const mongoose = require(‘../db/connections’)
const Schema =  mongoose.Schema

const Brunch = Schema ({
 content: {
 title: String,
 description: String,
 instructions: String,
 ingredients: String
 }
})
>>>>>>> f52cebc3d6f29229a855e290f5e212a00ca78189


module.exports = mongoose.model(‘Brunch’, Brunch)
// this is the action of Mongoose saying "create a collection called brunch and make it equal to what the Schema says"
