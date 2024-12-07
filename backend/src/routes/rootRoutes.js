import express from 'express';
import { getLoginHandler, getMainHandler, redirectRootHandler } from '../controller/rootController.js';

const rootRoutes = express.Router();

rootRoutes.get("/", redirectRootHandler);
rootRoutes.get("/login", getLoginHandler);
rootRoutes.get("/main", getMainHandler);

export default rootRoutes;