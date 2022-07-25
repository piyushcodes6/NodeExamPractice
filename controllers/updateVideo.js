
const videoSchema=require('../models/videos')

const updateVideo=((req,res)=>{
var videoID=req.body.videoID;
const updateBody={
    videoID:req.body.videoID,
    title:req.body.title,
    description:req.body.description,
    duration:req.body.duration,
    educatorUsername:req.body.educatorUsername,
    videoURL:req.body.videoURL,
    thumbnailURL:req.body.thumbnailURL
}
videoSchema.updateOne({_id:videoID},{$set:updateBody},(err)=>{
    if(err){
        res.status(400).json(err)
    }else{
    videoSchema.find({_id:videoID},(error,video)=>{
        if(error){
            console.log(error)
        }else{
            console.log(video)
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
            res.status(200).json({data})
        
        }
       
    })    
        }
})
})

module.exports={updateVideo}