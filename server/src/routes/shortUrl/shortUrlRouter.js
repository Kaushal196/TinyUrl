const express = require('express')
const { getShortUrl, createShortUrl } = require('./shortUrlController')

const shortUrlRouter = express.Router()

shortUrlRouter.get('/:shortId', getShortUrl)
shortUrlRouter.put('/createUrl', createShortUrl)

module.exports = shortUrlRouter