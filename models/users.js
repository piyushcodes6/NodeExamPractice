const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    email: {
        type: 'string',
        required: true
    },
    password: {
        type:'string',required: true
    },
    firstName:{
        type:'string',required: true
    },
    lastName:{
        type:'string',required: true
    },
    contactNumber:{type:'string',required: true},
    userType:{type:'string',required: true},
    videosLiked:{
        type:'number',
        default:0
    }

})

module.exports=mongoose.model('user',userSchema)