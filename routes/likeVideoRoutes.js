const express = require('express');
const {like_UnlikeVideo}=require('../controllers/likeController');
const app = express();
app.put("/", like_UnlikeVideo)
module.exports= app;