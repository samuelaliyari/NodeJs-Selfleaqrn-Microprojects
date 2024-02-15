import crypto from "crypto";

export const hash = (passHash, saltHash) => {
    return crypto.createHash("sha512").update(passHash + saltHash).digest("hex");
}

export const generateSaltHash = () => {
    const salt = crypto.randomBytes(64).toString("base64");
    console.log(salt)
    return crypto.createHash("sha512").update(salt).digest("hex");
}

export const generatePassHash = (password) => {
    return crypto.createHash("sha512").update(password).digest("hex");
}