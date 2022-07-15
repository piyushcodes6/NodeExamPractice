const express = require('express');
const {getUserDetails}=require('../controllers/userDetailsController');
const app = express();
app.get("/", getUserDetails)
module.exports= app;