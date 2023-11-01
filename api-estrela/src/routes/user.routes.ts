import { LoginController } from './../modules/users/useCases/login/LoginController';
import { CreateUserController } from "./../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import { VerifyTokenController  } from "../modules/users/useCases/verifyToken/verifyTokenController";

import { Router } from "express";
import { authenticateToken } from "../utilities/authenticateToken";


const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const loginController = new LoginController();
const verifyTokenController = new VerifyTokenController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", loginController.handle);
userRoutes.get("/", authenticateToken, getAllUsersController.handle);

userRoutes.post("/token",verifyTokenController.handle);

export { userRoutes };
