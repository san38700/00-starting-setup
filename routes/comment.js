const express = require('express');

const router = express.Router();

const commentController = require('../controllers/comment');

router.post('/comments',commentController.addComment)


module.exports = router