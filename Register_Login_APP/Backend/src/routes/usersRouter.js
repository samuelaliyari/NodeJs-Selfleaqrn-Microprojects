import express from "express";
import User from "../models/User.js";
import { generatePassHash, generateSaltHash, hash } from "../utils/hash.js";
import { contrroller } from "../controller/index.js";
import jwt from "jsonwebtoken";
import { createJwtToken } from "../jwt/createJwtToken.js";


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
usersRouter.post("/login", contrroller.loginUser)
usersRouter.get("/renew", async (req, res) => {
    const refreshToken = req.session.refreshToken;
    const verifyResult = jwt.verify(refreshToken, process.env.JWT_SECRET)
    if (!verifyResult) throw new Error("unValidToken")
    const newAccessToken = createJwtToken(verifyResult.sub)
    res.status(200).json({ success: true, newAccessToken: newAccessToken })
})


export default usersRouter