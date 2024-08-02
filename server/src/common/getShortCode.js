const ALPHABET = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789'

function getShortCode() {
  const size = ALPHABET.length
  let shortUrl = ''
  for(let i=0; i<7; i++) {
    const randomIndex = Math.floor(Math.random() * size) + 1
    shortUrl += ALPHABET[randomIndex]
  }
  return shortUrl
}

module.exports = getShortCode