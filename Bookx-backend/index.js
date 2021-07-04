const express=require('express');
const app=express();
const authRouter=require('./routes/auth');



//////database configuration
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/noman', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:true})
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch(()=>{
    console.log("Database failed to connect")
})


////middlewate
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api',authRouter);





app.listen(400,()=>{
    console.log("server is running on port 400")
})