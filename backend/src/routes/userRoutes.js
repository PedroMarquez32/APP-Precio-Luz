import express from 'express';
import { createUserHandler, getAllUserHandler} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/",createUserHandler);

userRoutes.get("/", getAllUserHandler);



export default userRoutes;