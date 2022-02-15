const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => res.send('hola'))

app.listen(PORT, (req, res) => console.log(`listening on port ${PORT}`))