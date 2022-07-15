const mongoose = require('mongoose');
const userSchema = require('../models/users')

const subscribeEducator=((req,res)=>{
    const learnerID=req.body.learnerID;
    const educatorID=req.body.educatorID;
    userSchema.find({_id:educatorID},(err,user)=>{
        console.log(user)
        if(err){
            console.log(err);
        }else if(user[0].userType != 'educator'){
            res.status(404).json(`Educator Not Found || Not a valid Educator`)
        }else{
            userSchema.findOneAndUpdate({_id: learnerID},{$inc:{subscriberEducator:1}},(error,learner)=>{
                console.log(learner)
                if(err){
                res.status(400).json(error)
              }  else{
                res.status(200).json({subscriberCount:learner.subscriberEducator})
              }
            })
        }
    })

})
module.exports ={subscribeEducator}