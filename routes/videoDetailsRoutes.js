const express = require('express');
const {getVideoDetails}=require('../controllers/videoDetailsController');
const app = express();
app.get("/", getVideoDetails)
module.exports= app;