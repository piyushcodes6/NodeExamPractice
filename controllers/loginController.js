const mongoose = require('mongoose')
const userSchema = require('../models/users')

const userLogin = (req, res, next) => {
  const ReqEmail = req.body.email
  const ReqPassword = req.body.password
  userSchema.find({}, (err, result) => {
    if (err) {
      console.log(err)
    }
    for (let index = 0; index < result.length; index++) {
      if (ReqEmail == result[0].email && ReqPassword == result[0].password) {
        res.status(200).json({ message: 'Login Successful' })
      } else {
        res.status(400).json({ message: 'Invalid login Credentials' })
        console.log(err)
      }
    }
  })
}

module.exports = { userLogin }
