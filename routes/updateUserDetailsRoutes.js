const express = require('express');
const {updateUser}=require('../controllers/updateUserDetails');
const app = express();
app.put("/", updateUser)
module.exports= app;