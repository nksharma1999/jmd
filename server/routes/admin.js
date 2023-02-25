import express from 'express';
import {getLatestRequest,adminLogin,createNewAdmin,addNewService,addNewCarType} from '../Controller/admin.js';
const adminRoute= express.Router();
adminRoute.get('/',getLatestRequest);
adminRoute.post('/login',adminLogin);
adminRoute.post('/addAdmin',createNewAdmin);
adminRoute.post('/addnew-service',addNewService);
adminRoute.post('/addNewCarType',addNewCarType)

export {adminRoute};