const express = require('express')
const { getShortUrl } = require('./tinyUrlController')

const tinyUrlRouter = express.Router()

tinyUrlRouter.get('/tinyUrl/:url', getShortUrl)

module.exports = tinyUrlRouter