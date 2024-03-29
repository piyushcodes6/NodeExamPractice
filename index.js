const express = require('express');
const app = express();
const port=3333;
const mongoose=require('mongoose');
const registerUsersRoutes=require('./routes/registerUsersRoutes')
const createVideoRoutes=require('./routes/createVideoRoutes')
const getVideoListing=require('./routes/videoListingRoutes')
const loginRoutes=require('./routes/loginRoutes')
const videoDetailsRoutes=require('./routes/videoDetailsRoutes')
const likeVideoRoutes=require('./routes/likeVideoRoutes')
const subscribeRoutes=require('./routes/subscribeRoutes')
const userDetailsRoutes=require('./routes/userDetailsRoutes')
const userUpdateRoutes=require('./routes/updateUserDetailsRoutes')
const updateVideoRoutes=require('./routes/updateVideoRoutes')
app.use(express.json());

app.use('/registerUsers',registerUsersRoutes);
app.use('/createVideo',createVideoRoutes);
app.use('/videoListing',getVideoListing)
app.use('/video',videoDetailsRoutes)
app.use('/likeVideo',likeVideoRoutes)
app.use('/subscribe',subscribeRoutes)
app.use('/user',userDetailsRoutes)
app.use('/login',loginRoutes)
app.use('/updateUser',userUpdateRoutes)
app.use('/updateVideo',updateVideoRoutes)
mongoose.connect("mongodb+srv://piyushcodes6:piyush1234@cluster0.vi2oi.mongodb.net/NodejsEdyoda?retryWrites=true&w=majority")
.then(() =>{
    console.log(`Db connected`);    
}).catch((err) =>{
    console.log(`Error connecting`+err);
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
