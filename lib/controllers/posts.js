const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post');

module.exports = Router()
  .get('/', authenticate, async (req, res) => {
    const resp = await Post.getAllPosts();
    res.json(resp);
  })

  .post('/', authenticate, async (req, res) => {
    const post = await Post.postNewPost(req.body);
    res.json(post);
  });
