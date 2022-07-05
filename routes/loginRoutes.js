const express = require('express');
const {userLogin}=require('../controllers/loginController');
const app = express();
app.post("/", userLogin)
module.exports= app;