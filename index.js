const express = require('express');
const app = express();
const port=3333;
const mongoose=require('mongoose');
const registerUsersRoutes=require('./routes/registerUsersRoutes')
const loginRoutes=require('./routes/loginRoutes')
app.use(express.json());

app.use('/registerUsers',registerUsersRoutes);
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