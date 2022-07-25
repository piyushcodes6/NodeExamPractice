const mongoose = require('mongoose')
const userSchema = require('../models/users')

const userLogin = (req, res) => {
  const reqEmail = req.body.email
  const reqPassword = req.body.password
  userSchema.find({email:reqEmail ,password:reqPassword},(err,user)=>{
    console.log(user)
    if(err){
      console.log(err)
    }else if(user.length ==0){
      return res.status(404).json("Invalid Login Credentials")
    }else{
      return res.status(200).json("login Successfull")
    }
  })
}

module.exports = { userLogin }
