const mongoose = require('mongoose');
const videoSchema=require('../models/videos');
const getVideoDetails=((req,res)=>{
    const videoID=req.query.videoID;
    videoSchema.updateOne({_id:videoID},{$inc:{viewCount:1}},(err,res)=>{
        if(err){
           console.log(err)
        }else{
            console.log(res)
        }
    })
    videoSchema.find({_id:videoID},(err,video)=>{
        if(err){
            res.status(400).json(err)
        }else{
            const data={
                videoID:video[0]._id,
                title:video[0].title,
                description:video[0].description,
                duration:video[0].duration,
                viewCount:video[0].viewCount,
                likesCount:video[0].likesCount,
                educatorUsername:video[0].educatorUsername,
                videoURL:video[0].videoURL,
                thumbnailURL:video[0].thumbnailURL
            }
            res.status(200).json([data])
        }
    })
})

module.exports={getVideoDetails};
