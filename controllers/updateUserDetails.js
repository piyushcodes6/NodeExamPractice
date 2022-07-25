const userSchema = require('../models/users');

const updateUser=((req,res)=>{
const userID=req.body.userID;
const updatebody={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    contactNumber:req.body.contactNumber,
    userType:req.body.userType
}

userSchema.findOneAndUpdate({_id:userID},updatebody,(err,user)=>{
    if(err){
        res.status(400).json(err)
    }else{
        res.status(200).json({data:user})
    }
})
})

module.exports={updateUser}
