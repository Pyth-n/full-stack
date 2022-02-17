const express = require('express')
const app = express()
const config = require('./utils/config')
const router = require('./app')
app.use(router)
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`))