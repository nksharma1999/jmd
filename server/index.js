import express from 'express';
import cors from  'cors';
import {userRoute} from './routes/users.js';
import {adminRoute} from './routes/admin.js';
import {connectDB} from './db/dbConnect.js';
const app =express();
app.use(express.json());
app.use(cors());
app.use('/user',userRoute);
app.use('/admin',adminRoute);


try{
    await connectDB();
app.listen(3002,()=>{
    console.log("Server Started on PORT:  3002");
})
}catch(err){
    console.log(err);
}