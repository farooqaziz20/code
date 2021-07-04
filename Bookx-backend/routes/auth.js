const express=require('express');
const router=express.Router();
const {signup,signin,Signupvalidations,Signinvalidations}=require('.././controllers/auth');





router.post('/signup',Signupvalidations,signup)
router.post('/signin',Signinvalidations,signin)








module.exports=router;