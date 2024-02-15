import { DAO } from "../DAO/DAO.js";
import { generatePassHash, generateSaltHash, hash } from "../utils/hash.js";



export const registerUser = async (newUser) => {
    console.log(newUser)
    const saltHash = generateSaltHash();
    console.log(saltHash)
    const passHash = generatePassHash(newUser.password);
    console.log(passHash)
    const passwordHash = hash(passHash, saltHash);
    console.log(passwordHash)
    const verificationCode = Math.random().toString().slice(2, 8);
    const securedUser = {
        ...newUser,
        passwordHash: passwordHash,
        saltHash: saltHash,
        verificationCode: verificationCode
    }
    const registeredUser = await DAO.registerUser(securedUser);
    return registeredUser;
}