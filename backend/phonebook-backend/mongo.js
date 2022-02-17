const mongoose = require('mongoose')
require('dotenv').config()

const KEY = process.env.MONGO_KEY
const name = process.argv[2]
const number = process.argv[3]

const url = `mongodb+srv://fullstack:${KEY}@cluster0.dv4cf.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Phonebook = new mongoose.model('phonebook', phoneBookSchema)

const phoneBook = new Phonebook({
  name: name,
  number: number
})

if (name && number) {
  phoneBook.save().then(res => {
    console.log(res)
    mongoose.connection.close()
  })
} else {
  Phonebook.find({}).then(res => {
    res.forEach(p => {
      console.log(`${p.name} ${p.number}`)
    })
    mongoose.connection.close()
  })
}
