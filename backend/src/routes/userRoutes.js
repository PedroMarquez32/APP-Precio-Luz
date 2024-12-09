import express from 'express';
import { createUserHandler, getAllUserHandler, loginUserHandler} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/signin",createUserHandler);
userRoutes.post("/login", loginUserHandler);

userRoutes.get("/", getAllUserHandler);

export default userRoutes;