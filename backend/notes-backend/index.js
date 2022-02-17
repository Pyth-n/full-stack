const express = require('express')
const app = express()
const logger = require('./utils/logger')
const config = require('./utils/config')
const notes = require('./controllers/notes')

app.use(express.json())
app.use('/api/notes', notes)

app.listen(config.PORT, () => logger.info(`Server running on port ${config.PORT}`))