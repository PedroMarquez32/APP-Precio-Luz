import express from 'express';
import { getIndexHandler, getPostFormHandler } from '../controller/rootController.js';


const rootRoutes = express.Router();


rootRoutes.get("/", getIndexHandler);

rootRoutes.post("/",getPostFormHandler);








export default rootRoutes;