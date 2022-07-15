const express = require('express');
const {subscribeEducator}=require('../controllers/subscribeController');
const app = express();
app.put("/", subscribeEducator)
module.exports= app;