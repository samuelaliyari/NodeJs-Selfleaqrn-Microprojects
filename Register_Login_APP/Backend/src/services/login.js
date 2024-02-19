import { DAO } from "../DAO/DAO.js"
import { createJwtToken } from "../jwt/createJwtToken.js";
import { generatePassHash, hash } from "../utils/hash.js";





export const login = async (loginInfo) => {
    const user = await DAO.getUserByMail(loginInfo.email);
    if (!user) throw new Error("User with this email does not exist");

    const inputPassHash = generatePassHash(loginInfo.password);
    const saltedInputHash = hash(inputPassHash, user.saltHash);

    if (user.passwordHash !== saltedInputHash) throw new Error("Wrong login informations! Please try again");

    const accessToken = createJwtToken(user);
    const refreshToken = createJwtToken(user, "refresh");
    const tokens = {
        accessToken,
        refreshToken
    }
    return tokens
}