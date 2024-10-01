import express from "express" ;
import { getUsers } from "../controller/userController.js";

const userRouter = express.Router() ;

userRouter.get("/all-users",getUsers) ;

export default userRouter ;