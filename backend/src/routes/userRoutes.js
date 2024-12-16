import express from 'express';
import { createUserHandler, loginUserHandler} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/signin", createUserHandler);
userRoutes.post("/login", loginUserHandler);

export default userRoutes;