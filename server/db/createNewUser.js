import {jmdUserModel} from '../Model/users.js';
import  CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
dotenv.config();
export const createNewUser = async(req,res)=>{
    try{
        const userpassword=req.body.password;
        const hashedPassword = CryptoJS.AES.encrypt(userpassword,process.env.USERPASS).toString();
        const {password,...other} =req.body;
        const newUser = new jmdUserModel({...other,password:hashedPassword});
        await newUser.save();
        res.status(200).json({msg:"User Created!"});
    }catch(err){
        console.log(err);
        res.status(401).json({msg:"User Not Created!"});
    }
   
}