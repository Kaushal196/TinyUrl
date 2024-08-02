const express = require('express')
const app = express()
const shortUrlRouter = require('./routes/shortUrl/shortUrlRouter')

app.use(express.json())
app.use(shortUrlRouter)

module.exports = app