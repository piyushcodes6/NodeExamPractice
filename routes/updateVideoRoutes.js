const express = require('express');
const {updateVideo}=require('../controllers/updateVideo');
const app = express();
app.put("/", updateVideo)
module.exports= app;