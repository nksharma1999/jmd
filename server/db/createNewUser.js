import {UserModel} from '../Model/users.js';
import  CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
dotenv.config();
export const createNewUser = async(req,res)=>{
    console.log(req.body);
    const {username,phoneNumber,password}=req.body;
    const newUser = new UserModel({
        username:username,
        phoneNumber:phoneNumber,
        password:CryptoJS.AES.encrypt(password,process.env.USERPASS).toString()
    });
    try{
        await newUser.save();
        res.status(200).json({msg:"User Created!"});
    }catch(err){
        console.log(err);
        res.status(401).json({msg:"User Not Created!"});
    }
   
}