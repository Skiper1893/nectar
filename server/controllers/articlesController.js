const express = require('express');
const urlUnfurler = require('../helpers/urlUnfurler');

const router = express.Router();

router.get('/metadata', metadata);

async function metadata(req, res) {
  const articleUrl = decodeURI(req.query.articleUrl);
  const articleMetadata = await unfurl(articleUrl);

  res.json(articleMetadata);
}

async function unfurl(url) {
  return await urlUnfurler.unfurl(url);
}

module.exports = router;
