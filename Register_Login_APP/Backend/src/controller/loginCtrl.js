import { services } from "../services/index.js";



export const loginUserCtrl = async (req, res) => {
    try {
        const loginInfo = req.body;
        const loginResult = await services.login(loginInfo)
        req.session.refreshToken = loginResult.refreshToken
        res.status(200).json({ success: true, result: loginResult })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}