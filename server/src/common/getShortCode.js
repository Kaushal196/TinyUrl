const pool = require('../../database')
const ALPHABET = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789'

async function getShortCode() {
  const size = ALPHABET.length
  while(true) {
    let shortCode = ''
    for(let i=0; i<7; i++) {
      const randomIndex = Math.floor(Math.random() * size)
      shortCode += ALPHABET[randomIndex]
    }
    const { rows } = await pool.query('SELECT * FROM urls WHERE short_url = $1;', [shortCode]);
    if (rows.length === 0) {
      return shortCode
    }
  }
}

module.exports = getShortCode