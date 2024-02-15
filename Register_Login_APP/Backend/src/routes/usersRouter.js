import express from "express";
import User from "../models/User.js";
import { generatePassHash, generateSaltHash, hash } from "../utils/hash.js";
import { contrroller } from "../controller/index.js";


const usersRouter = express.Router()

usersRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, result: users })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
});

usersRouter.post("/register", contrroller.registerUser)


export default usersRouter