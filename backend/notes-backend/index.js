const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('./utils/logger')

const Note = require('./models/note')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id))
  : 0
  return maxId + 1
}

app.get('/', (req, res) => res.send('<h1>hello world</h1>'))
app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes)
  })
})
app.post('/api/notes', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  })
  
  note.save().then(savedNote => res.json(savedNote))
})

app.get('/api/notes/:id', (req, res, next) => {
  Note
    .findById(req.params.id)
    .then(note => {
      if (note) return res.json(note)
      return res.status(404).end()
    })
    .catch(err => next(err))
})

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  console.log(notes)
  res.status(204).end()
})

const handleError = (err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.json({error: 'malformed id'})
  }
  next(err)
}

app.use(handleError)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`running on port ${PORT}`)