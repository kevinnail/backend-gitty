const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post');

module.exports = Router().get('/', authenticate, async (req, res) => {
  const resp = await Post.getAllSecrets();
  res.json(resp);
});
