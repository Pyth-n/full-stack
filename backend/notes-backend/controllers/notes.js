const cors = require('cors')

const Note = require('./models/note')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

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