import express from "express";
import { edit, remove, logout, see } from "../controllers/usercontroller"
const handleEditUser = (req,res) => res.send("Edit User");

const handleUserHome = (req,res) => res.send("User Home");

const userRouter = express.Router();
userRouter.get("/edit", edit);
userRouter.get("/", handleUserHome);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;
