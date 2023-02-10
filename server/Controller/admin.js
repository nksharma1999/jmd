import {QuoteModel} from '../Model/quote.js';
import {UserModel} from '../Model/users.js';
import  CryptoJS from 'crypto-js';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const getLatestRequest = async (req,res) =>{
    
    try{
        const data = await QuoteModel.find({});
        res.status(200).json(data);
    }catch(err){
        res.status(401).json({msg:'Data not found'});
    }
}

export const adminLogin = async(req,res)=>{
    console.log(req.body);
    const {phoneNumber,password} =req.body;
    if(phoneNumber && password){
        try{
            const adminDetail =await UserModel.findOne({phoneNumber:phoneNumber});
            // console.log(adminDetail);
            if(!adminDetail._doc.isAdmin){
                res.status(401).json({msg:"You are not admin!"});
            }else{
                const hashedPassword = CryptoJS.AES.decrypt(adminDetail.password,process.env.USERPASS);
                const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
                if(originalPassword!==password){
                    res.status(401).json({msg:'phone number / password invalid!'});
                }else{
                    // console.log(adminDetail);
                    const token= JWT.sign({id:adminDetail._id,isAdmin:adminDetail.isAdmin,useName:adminDetail.username},process.env.JWTTOKEN,{expiresIn:"3d"});
                    const {password,createdAt,_id,__v,...other} = adminDetail._doc;
                    res.status(200).json({AccessToken:token,msg:'Admin Logged in',...other});
                }
            }
            
        }catch(err){
            res.status(401).json({msg:"admin id not found"});
        }
    }else{
        res.status(401).json({msg:'Please Enter phone Number / Password'});
    }
} 