const mongoose = require('mongoose');
const videoSchema=require('../models/videos')
const userSchema = require('../models/users');
const createVideo=((req,res) => {
    const video=new videoSchema(req.body)
    let educatorDetails={};
    const educatorID=req.body.educatorID;
    userSchema.find({_id:educatorID},(err,user)=>{
        if(err){
            console.log(err)
          }else{
            educatorDetails=user[0];
            console.log(educatorDetails)
        }
    })
    video.save(err =>{

        if(err){
            res.status(400).json(err)
        }else{
            const data={
                videoID:video._id,
                title:video.title,
                description:video.description,
                duration:video.duration,
                viewCount:video.viewCount,
                likesCount:video.likesCount,
                educatorUsername:educatorDetails.firstName,
                videoURL:video.videoURL,
                thumbnailURL:video.thumbnailURL
            }
            res.status(200).json(data)
        }
                
    })
})

module.exports ={createVideo};