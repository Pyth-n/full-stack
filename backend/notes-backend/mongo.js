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