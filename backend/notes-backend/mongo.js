const mongoose = require('mongoose')
require('dotenv').config()

const KEY = process.env.MONGO_KEY
const url = `mongodb+srv://fullstack:${KEY}@cluster0.dv4cf.mongodb.net/note-app?retryWrites=true&w=majority`

console.log(KEY)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'html is ok',
//   date: new Date(),
//   important: true
// })

// note.save().then(res => {
//   console.log('note saved')
//   mongoose.connection.close()
// })

Note.find({}).then(res => {
  res.forEach(note => console.log(note))
  mongoose.connection.close()
})