const jwt = require("jsonwebtoken");
const authModel=require('.././models/auth');
const bcrypt=require('bcryptjs');
const { body, validationResult } = require('express-validator');



exports.Signupvalidations=[
    body('name').notEmpty().withMessage("Name Cannot Be Empty"),
    body('email').notEmpty().isEmail().withMessage("Email Cannot Be Empty or invalid email"),
    body('password').notEmpty().withMessage("Password Cannot Be Empty"),
    body('cpassword').notEmpty().withMessage("Confrim password Cannot Be Empty"),
]



exports.Signinvalidations=[
    body('email').notEmpty().withMessage("Email Cannot Be Empty or invalid email"),
    body('password').notEmpty().withMessage("Password Cannot Be Empty"),
]




exports.signup=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),status:400 });
    }
    const {name,email,password,cpassword}=req.body;
    const userExist=authModel.findOne({email})
    userExist.exec((err,data)=>{
        if(err) throw err;
        if(data){
            return res.status(409).json({
                message:"User Already Exist",
                status:409
            })
        }else{
            if(password===cpassword){
                const hashPassword=bcrypt.hashSync(password,10)
                const insertData=new authModel({name,email,password:hashPassword})
                insertData.save((err,data)=>{
                    if(err) throw err;
                    if(data){
                        return res.status(200).json({
                            message:"Data inserted into database successfully",
                            data:data
                        })
                    }
                })
            }
            else{
                return res.status(409).json({
                    message:"Password Should Be Matched",
                    status:409
                })
            }
        }
    })
}




exports.signin=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),status:400 });
    }
    const {email}=req.body;
    const findData=authModel.findOne({email})
    findData.exec((err,data)=>{
        if(err) throw err;
        if(data){
            const passwordMatched=bcrypt.compareSync(req.body.password,data.password)
            if(passwordMatched){
                const token=jwt.sign(
                    {
                    _id: data._id,
                },
                "Noman Waleed"
                
                )
                console.log(token);
                return res.status(200).json({
                    message:"user login",
                    token: token,
                },

                )
            }else{
                return res.status(401).json({
                    message:"invalid credentials",
                    status:401
                })
            }
        }else{
            return res.status(401).json({
                message:"invalid credentials",
                status:401
            })
        }
    })
}