import {UserModel} from '../Model/users.js';
import  CryptoJS from 'crypto-js';
export const createNewUser = async(req,res)=>{
    console.log(req.body);
    const {username,phoneNumber,password}=req.body;
    const newUser = new UserModel({
        username:username,
        phoneNumber:phoneNumber,
        password:CryptoJS.AES.encrypt(password,"adgsibogdi3ydsy").toString()
    });
    try{
        await newUser.save();
        res.status(200).json({msg:"User Created!"});
    }catch(err){
        console.log(err);
        res.status(401).json({msg:"User Not Created!"});
    }
   
}