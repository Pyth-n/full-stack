const notesRouter = require('express').Router()

const Note = require('../models/note')

notesRouter.get('/', async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})
notesRouter.post('/', async (req, res) => {
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
  
  const savedNote = await note.save()
  res.status(201).json(savedNote)
})

notesRouter.get('/:id', async (req, res, next) => {
  const note = await Note.findById(req.params.id)

  if (note) return res.json(note)

  res.status(404).end()
})

notesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  console.log(notes)
  res.status(204).end()
})

module.exports = notesRouter