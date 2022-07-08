const express = require('express');
const {createVideo}=require('../controllers/createVideoController');
const app = express();
app.post("/", createVideo)
module.exports= app;