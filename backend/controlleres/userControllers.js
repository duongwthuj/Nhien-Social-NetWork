import { User } from "../models/user_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../utlis/datauri";

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
        const userId = req.id;
        const {bio, gender} = req.body;
        const profilePicture = req.file;
        let cloundRespone;
        if (profilePicture){
            const fileUri = getDataUri(profilePicture);
            cloundRespone = await cloudinary.uploader.upload(fileUri);
        }
        const user = await User.findById(userId);
        if (!user){
            return res.status(404).json({
                msg: "User not found",
                success: false,
            });
        }
        if (bio) user.bio = bio;
        if (gender) user.gender = gender;
        if (profilePicture) user.profilePicture = cloundRespone.secure_url;
        await user.save();
        return res.status(200).json({
            msg: "Profile updated",
            success: true,
            user
        });
    } catch (error) {
        console.log(error);
    }
};