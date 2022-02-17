const mongoose = require('mongoose')

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