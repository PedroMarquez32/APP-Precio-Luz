import express from 'express';
import { createUserHandler, getAllUserHandler, loginUserHandler} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/signin", createUserHandler);
userRoutes.post("/login", loginUserHandler);

<<<<<<< HEAD
<<<<<<< HEAD
userRoutes.get("/", getAllUserHandler);
=======
userRoutes.get("/users", getAllUserHandler);

>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
=======
userRoutes.get("/users", getAllUserHandler);

>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2

export default userRoutes;