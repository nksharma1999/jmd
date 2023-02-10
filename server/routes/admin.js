import express from 'express';
import {getLatestRequest,adminLogin} from '../Controller/admin.js';
const adminRoute= express.Router();
adminRoute.get('/',getLatestRequest);
adminRoute.post('/login',adminLogin);

export {adminRoute};