import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { usersRouter } from "./routes/index.js";
import cookieSession from "cookie-session";




const app = express();

dotenv.config();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;


// app.set("trust proxy", 1);
app.use(cookieSession({
    name: "session",
    signed: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000 * 10,
    httpOnly: true,
    secret: process.env.SESSION_SECRET
}))
app.use("/api/v1/users", usersRouter.default)






const runServer = () => {
    console.log("Starting server ...");
    app.listen(PORT, console.log("Server Successfully started @ Port: " + PORT));
}


const connectDB = async () => {
    console.log("Connecting to Mongo DB... ");
    await mongoose.connect(URI, { dbName: "Selflearn_Nodejs_micro_Projects" });
    console.log("DB Connection Succeeded")
}




connectDB()
    .then(runServer)
    .catch(err => console.log(err))