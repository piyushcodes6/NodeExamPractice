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
app.use(express.json());

app.use('/registerUsers',registerUsersRoutes);
app.use('/createVideo',createVideoRoutes);
app.use('/videoListing',getVideoListing)
app.use('/video',videoDetailsRoutes)
app.use('/likeVideo',likeVideoRoutes)
app.use('/login',loginRoutes)
mongoose.connect("mongodb://127.0.0.1:27017/?readPreference=primary&directConnection=true&ssl=false")
.then(() =>{
    console.log(`Db connected`);    
}).catch(() =>{
    console.log(`Error connecting`);
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
