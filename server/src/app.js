const express = require('express')
const app = express()
const tinyUrlRouter = require('./routes/tinyUrl/tinyUrlRouter')

app.use(express.json())
app.use(tinyUrlRouter)

module.exports = app