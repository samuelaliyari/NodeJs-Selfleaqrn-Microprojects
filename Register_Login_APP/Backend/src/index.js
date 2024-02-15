import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { usersRouter } from "./routes/index.js";




const app = express();

dotenv.config();
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

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