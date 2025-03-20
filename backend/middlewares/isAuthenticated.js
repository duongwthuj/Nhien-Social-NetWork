import jwt from "jsonwebtoken";
import User from "../models/user_model";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token){
            return res.status(401).json({
                msg: "User not authenticated",
                success: false,
            });
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode){
            return res.status(401).json({
                msg: "Invalid",
                success: false,
            });
        }
        req.id = decode.userId;
        next(); // Chuyển hướng sang middleware tiếp theo
    } catch (error) {
        console.log(error);
    }
};