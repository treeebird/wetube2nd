import express from "express";
import { join, login } from "../controllers/usercontroller"
import { trending, search } from "../controllers/videocontroller"

const globalRouter = express.Router();

const handleHome = (req,res) => res.send("home");

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);



export default globalRouter;