const express = require('express');
const router = express.Router();
const controllerPost = require('../controller/post');

router.get('/post', controllerPost.getPost);

router.post('/plusLike', controllerPost.plusLike);

module.exports = router;