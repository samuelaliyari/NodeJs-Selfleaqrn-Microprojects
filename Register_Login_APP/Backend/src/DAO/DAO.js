import User from "../models/User.js";

const registerUser = async (userObj) => {
    return await User.create(userObj);
}





export const DAO = {
    registerUser,
}