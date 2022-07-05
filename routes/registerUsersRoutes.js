const express = require('express');
const {registerUsers}=require('../controllers/registerUsersController');
const app = express();
app.post("/", registerUsers)
module.exports= app;