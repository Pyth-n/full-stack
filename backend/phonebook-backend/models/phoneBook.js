const mongoose = require('mongoose')
require('dotenv').config()

const KEY = process.env.MONGO_KEY

const url = `mongodb+srv://fullstack:${KEY}@cluster0.dv4cf.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String
})

phoneBookSchema.set('toJSON', {
  transform: (document, retrievedObj) => {
    retrievedObj.id = retrievedObj._id
    delete retrievedObj._id
    delete retrievedObj.__id
  }
})

module.exports = new mongoose.model('phonebook', phoneBookSchema)
