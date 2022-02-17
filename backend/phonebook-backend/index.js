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

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${data.length} people <br /><br />${Date()}`)
})
app.get('/api/persons', (req, res) => {
  Phonebook.find({}).then(pb => res.json(pb))
})
app.get('/api/persons/:id', (req, res, next) => {
  Phonebook.findById(req.params.id)
    .then(pb => {
      if (pb) {
        res.json(pb)
      } else {
        res.status(404).end()
      }
    })
    .catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res) => {
  Phonebook.findOneAndDelete({_id: req.params.id}).then(del => res.json(del))
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

const errorHandler = (err, req, res, next) => {
  console.error(err.message)

  if (err.name === 'CastError') {
    return res.status(400).send({error: 'malformed id'})
  }
  next(err)
}

app.use(errorHandler)

app.listen(PORT, (req, res) => console.log(`listening on port ${PORT}`))