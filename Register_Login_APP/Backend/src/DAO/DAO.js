import User from "../models/User.js";

const registerUser = async (userObj) => {
    return await User.create(userObj);
}
const getUserByMail = async (userEmail) => {
    return await User.findOne({ email: userEmail });
}





export const DAO = {
    registerUser,
    getUserByMail
}