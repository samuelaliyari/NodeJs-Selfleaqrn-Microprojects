import { DAO } from "../DAO/DAO.js";
import { generatePassHash, generateSaltHash, hash } from "../utils/hash.js";



export const registerUser = async (newUser) => {

    const saltHash = generateSaltHash();
    const passHash = generatePassHash(newUser.password);
    const passwordHash = hash(passHash, saltHash);
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