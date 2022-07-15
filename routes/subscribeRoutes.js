const express = require('express');
const {subscribeEducator}=require('../controllers/subscribeController');
const app = express();
app.get("/", subscribeEducator)
module.exports= app;