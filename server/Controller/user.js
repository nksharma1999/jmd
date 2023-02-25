import {QuoteModel} from '../Model/quote.js';
import {jmdUserModel} from '../Model/users.js';
import {ourServiceModel} from '../Model/ourService.js';
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
    const {contact,password} = req.body;
    if(contact && password){
        try{
        const userDetail = await jmdUserModel.findOne({contact:contact});
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


export const getOurService = async(req,res)=>{
        // console.log(req.body);
        const {carTypeSelection, location,serviceType} = req.body;
        let resultData = [];
        try{
            const data = await ourServiceModel.find({location:location,serviceType:serviceType}, { _id: 0,__v:0,location:0,country:0,createdAt:0} );
            // console.log(data);
            for(let i=0;i<data.length;i++){
                const {carType, os_id,serviceType,serviceName}=data[i];
                // const filterData = {...other}
                let filterCarType = [];
                // console.log(carType);
                for(let j=0;j<carType.length;j++){
                    if(carType[j].manufacturer===carTypeSelection.manufacturer && carType[j].model===carTypeSelection.model && carType[j].fuel===carTypeSelection.fuel){
                        filterCarType.push(carType[j]);
                    }
                }
                resultData.push({
                    os_id,
                    serviceType,
                    serviceName,
                    carType:filterCarType,
                });
            }
            res.status(200).json(resultData);
        }catch(err){
            console.log(err);
            res.status(401).json({msg:'data not found'});
        }
}