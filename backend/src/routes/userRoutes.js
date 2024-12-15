import express from 'express';
import { createUserHandler, getAllUserHandler, loginUserHandler} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/signin", createUserHandler);
userRoutes.post("/login", loginUserHandler);

<<<<<<< HEAD
userRoutes.get("/", getAllUserHandler);
=======
userRoutes.get("/users", getAllUserHandler);

>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb

export default userRoutes;