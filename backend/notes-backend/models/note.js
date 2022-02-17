const mongoose = require('mongoose')
require('dotenv').config()

const KEY = process.env.MONGO_KEY
const url = `mongodb+srv://fullstack:${KEY}@cluster0.dv4cf.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__id
  }
})

module.exports = mongoose.model('Note', noteSchema)