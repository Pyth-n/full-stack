const cors = require('cors')
const notesRouter = require('express').Router()

const Note = require('../models/note')

notesRouter.use(cors())

notesRouter.get('/', (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes)
  })
})
notesRouter.post('/', (req, res) => {
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

notesRouter.get('/:id', (req, res, next) => {
  Note
    .findById(req.params.id)
    .then(note => {
      if (note) return res.json(note)
      return res.status(404).end()
    })
    .catch(err => next(err))
})

notesRouter.delete('/:id', (req, res) => {
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

notesRouter.use(handleError)

module.exports = notesRouter