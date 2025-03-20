import { User } from "../models/user_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Lấy thông tin người dùng
export const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(200).json({
                msg: "User not found",
                success: false,
            });
        }
    } catch (error) {
        console.log(error);
    }
}; 


// Cập nhật thông tin người dùng
export const editProfile = async (req, res) => {
    try {
        // const 
    } catch (error) {
        console.log(error);
    }
};