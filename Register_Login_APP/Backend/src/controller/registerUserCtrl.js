import { services } from "../services/index.js"



export const registerUserCtrl = async (req, res) => {
    try {
        const newUser = req.body
        console.log(newUser)
        const registeredUser = await services.registerUser(newUser)
        res.status(201).json({ success: true, result: registeredUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error })
    }
}