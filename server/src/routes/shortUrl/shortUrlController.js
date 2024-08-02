const pool = require('../../../database')
const getShortCode = require('../../common/getShortCode')

async function getShortUrl(req, res) {
  try {
    const shortCode = req.params.shortId;
    const { rows } = await pool.query('SELECT * FROM urls WHERE short_url = $1;', [shortCode]);
    if (rows.length === 0) {
      return res.status(404).send('URL not found');
    }    
    const longUrl = rows[0].long_url;
    return res.redirect(301, longUrl);
  } catch (error) {
    console.error('Error retrieving short URL:', error);
    return res.status(500).send('Internal Server Error');
  }
}

async function createShortUrl(req, res) {
  try {
    const fullUrl = req.body.longUrl;
    const shortCode = await getShortCode()
    await pool.query(`INSERT INTO urls VALUES ($1, $2);`, [fullUrl, shortCode])
    return res.status(200).json({
      longUrl: req.body.longUrl,
      shortUrl:  `${req.protocol}://${req.get("host")}/${shortCode}`
    })
  } catch (error) {
    console.error('Error retrieving short URL:', error);
    return res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getShortUrl,
  createShortUrl
}