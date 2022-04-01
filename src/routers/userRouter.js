import express from "express";


 const handleEditUser = (req,res) => res.send("Edit User");

const handleUserHome = (req,res) => res.send("User Home");

const userRouter = express.Router();
userRouter.get("/edit", handleEditUser);
userRouter.get("/", handleUserHome);

export default userRouter;
