import { Router } from "express";
import { verifyJWT } from "../modules/token/VerifyToken";
import { AuthUserController } from "../modules/users/useCases/authUser/AuthUserController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUserByEmailController } from "../modules/users/useCases/getUserByEmail/GetUserByEmailController";

const createUserController = new CreateUserController();
const getUserByEmailController = new GetUserByEmailController();
const authUserController = new AuthUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/email", verifyJWT, getUserByEmailController.handle);

userRoutes.post("/auth", authUserController.handle);

export { userRoutes };
