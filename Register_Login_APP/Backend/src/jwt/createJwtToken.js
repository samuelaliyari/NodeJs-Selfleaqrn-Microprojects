import jwt from "jsonwebtoken";



export const createJwtToken = (user, tokenType = "access") => {
    const JWT_SECRET = process.env.JWT_SECRET;
    const expiresIn = {
        "access": "60min",
        "refresh": "10d"
    }[tokenType] || "3min";

    const token = jwt.sign({ sub: user._id, typ: tokenType }, JWT_SECRET, { expiresIn })
    return token
}