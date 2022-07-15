const mongoose = require('mongoose');
const userSchema = require('../models/users');

const getUserDetails=((req, res) => {
    const userName = req.query.userName;
    userSchema.find({firstName:userName},(err,user) => {
        if(err){
            res.status(404).json(err)
        }else{
            const data={
                userId: user[0]._id,
                firstName:user[0].firstName,
                lastName:user[0].lastName,
                email:user[0].email,
                contactNumber:user[0].contactNumber,
                subscribeEducator:user[0].subscribedEducator,
                videosLiked:user[0].videosLiked,
                userType:user[0].userType
            }
            res.status(200).json(data)
        }
    })
})

module.exports={getUserDetails}