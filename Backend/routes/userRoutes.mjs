import express from "express"
import { loginUser, registerUser } from "../controller/userController.mjs"

const userRouter = express.Router()


userRouter.post("/register", registerUser)
userRouter.post("/login",loginUser)


export default userRouter;