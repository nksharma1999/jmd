import express from 'express';
import {newQuote,loginUser} from '../Controller/user.js'
import {createNewUser} from '../db/createNewUser.js';
import {getOurService} from '../Controller/user.js';
const userRoute= express.Router();
userRoute.get('/',(req,res)=>{
    console.log("hello");
    res.send('hello from server');
});
// @user/
userRoute.post('/quoteData',newQuote);
userRoute.post('/newUser',createNewUser);
userRoute.post('/login',loginUser);
userRoute.post('/ourservice',getOurService);

export {userRoute};