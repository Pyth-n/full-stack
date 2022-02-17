require('dotenv').config()

const PORT = process.env.PORT
const KEY = process.env.MONGO_KEY

module.exports = {
  PORT,
  KEY
}