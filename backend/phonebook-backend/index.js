const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3001

const Phonebook = require('./models/phoneBook')

app.use(cors())
app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens['body'](req,res)
  ].join(' ')
}))

let data = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const getMaxId = () => {
  const maxId = data.length > 0 ?
    Math.max(...data.map(p => p.id)) : 0
  return maxId + 1
}

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${data.length} people <br /><br />${Date()}`)
})
app.get('/api/persons', (req, res) => {
  Phonebook.find({}).then(pb => res.json(pb))
})
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)

  const note = data.find(p => p.id === id)

  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
  
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  data = data.filter(note => note.id !== id)
  res.json(data)
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  if (!body.name || !body.number) return res.status(400).send('no content')
  const person = new Phonebook({
    name: body.name,
    number: body.number
  })
  
  person.save().then(savedPb => res.json(savedPb))
})

app.listen(PORT, (req, res) => console.log(`listening on port ${PORT}`))