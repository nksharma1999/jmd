import {QuoteModel} from '../Model/quote.js';
import {UserModel} from '../Model/users.js';
import  CryptoJS from 'crypto-js';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const newQuote =async (req,res)=>{
    // console.log(req.body);
    const newQuote = new QuoteModel({...req.body,status:'open'});
    try{
        await newQuote.save();
        res.status(200).json({msg:"Thanks! Our Team will contact you within 10 minutes"});
    }catch(err){
        res.status(401).json({msg:"Invalid Data!"});
    }
}

export const loginUser = async(req,res)=>{
    console.log(req.body);
    const {phoneNumber,password} = req.body;
    if(phoneNumber && password){
        try{
        const userDetail = await UserModel.findOne({phoneNumber:phoneNumber});
        const hashedPassword = CryptoJS.AES.decrypt(userDetail.password,process.env.USERPASS);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if(originalPassword!==password){
            res.status(401).json({msg:'phone number / password invalid!'});
        }else{
            console.log(userDetail);
            const token= JWT.sign({id:userDetail._id,isAdmin:userDetail.isAdmin,useName:userDetail.username},process.env.JWTTOKEN,{expiresIn:"3d"});
            const {password,createdAt,_id,__v,...other} = userDetail._doc;
            res.status(200).json({AccessToken:token,msg:'user Logged in',...other});
        }}catch(err){
            res.status(401).json({msg:'phone Number Not Exists!'});
        }
    }else{
        res.status(401).json({msg:'Please Enter phone number / password!'});
    }
    
}
