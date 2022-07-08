const mongoose=require('mongoose');
const videoSchema=new mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    duration:{
        type: 'string',
        required: true
    },
    educatorID:{
        type: 'string',
        required: true
    },
    videoURL:{
        type: 'string',
        required: true
    },
    thumbnailURL:{
        type: 'string',
        required: true
    },
    viewCount:{
        type: 'number',
        default: 0
    },
    likesCount:{
        type: 'number',
        default: 0
    }
})

module.exports = mongoose.model('video',videoSchema)