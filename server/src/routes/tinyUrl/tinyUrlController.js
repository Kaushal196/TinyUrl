async function getShortUrl(req, res) {
  return res.status(200).json({message: "Basic get api setup complete"})
}

module.exports = {
  getShortUrl
}