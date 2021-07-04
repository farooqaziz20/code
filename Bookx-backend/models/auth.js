const mongoose=require('mongoose');

const authSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    cpassword:{
        type:String,
    },
},{ timestamps: true })


const authModel=new mongoose.model('auth',authSchema);
module.exports=authModel;