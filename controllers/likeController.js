const mongoose = require('mongoose');
const videoSchema=require('../models/videos')
const userSchema = require('../models/users')
const like_UnlikeVideo=((req,res)=>{
    const userID=req.body.userID;
    const videoID=req.body.videoID;
    // const reqType=req.body.reqType;
    videoSchema.findOneAndUpdate({_id:videoID},{$inc:{likesCount:1}},(err,video)=>{
        if(err){
            res.status(400).json(err)
        }else{
            console.log(video)
            res.status(200).json({likesCount:video.likesCount})
            userSchema.findOneAndUpdate({_id:userID},{$inc:{videosLiked:1}},(error,user)=>{
                if(error){
                    res.status(400).json(error)
                }else{
                    console.log(user)
                }
            })
        }
    })
     
})

module.exports={like_UnlikeVideo};