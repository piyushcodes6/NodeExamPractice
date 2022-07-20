const mongoose = require('mongoose')
const userSchema = require('../models/users')

const userLogin = (req, res) => {
  const ReqEmail = req.body.email
  const ReqPassword = req.body.password
  userSchema.find({}, (err, result) => {
    if (err) {
      console.log(err)
    }
    else{
  //    console.log(result)
      for (let i = 0; i<= result.length; i++) {
        console.log(i)
        if (ReqEmail == result[i].email && ReqPassword == result[i].password) {
         return res.status(200).json('Login Successful')
        } else {
         return res.status(400).json('Invalid login Credentials')
        }
      }
    }
  })
}

module.exports = { userLogin }
