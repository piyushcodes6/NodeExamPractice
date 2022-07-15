const express = require('express');
const {getVideoListing}=require('../controllers/videoListingController');
const app = express();
app.get("/", getVideoListing)
module.exports= app;