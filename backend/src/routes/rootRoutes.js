import express from 'express';
import { getIndexHandler} from '../controller/rootController.js';


const rootRoutes = express.Router();

rootRoutes.get("/", getIndexHandler);

export default rootRoutes;