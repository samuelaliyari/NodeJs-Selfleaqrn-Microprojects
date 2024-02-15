import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    saltHash: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, required: true },
}, { collection: "users", timestamps: true })


const User = mongoose.model("User", userSchema);

export default User