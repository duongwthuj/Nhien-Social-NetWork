import { User } from "../../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../../utlis/datauri.js";

// Lấy thông tin người dùng
export const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        let user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(200).json({
                msg: "User not found",
                success: false,
            });
        }
        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
    }
}; 


// Cập nhật thông tin người dùng
export const editProfile = async (req, res) => {
    try {
        const userId = req.id;
        console.log("userId:", userId);
        const {bio, gender} = req.body;
        console.log("req.body:", req.body);
        const profilePicture = req.file;
        console.log("profilePicture:", profilePicture);
        let cloundRespone;
        if (profilePicture){
            const fileUri = getDataUri(profilePicture);
            cloundRespone = await cloudinary.uploader.upload(fileUri);
            console.log("success:", cloundRespone);
        } else{
            console.log("No profile picture");
            // return res.status(400).json({
            //     msg: "Please upload a profile picture",
            //     success: false,
            // });
        }
        const user = await User.findById(userId).select("-password");
        console.log("user:", user);
        if (!user){
            return res.status(404).json({
                msg: "User not found",
                success: false,
            });
        }
        if (bio) user.bio = bio;
        if (gender) user.gender = gender;
        if (profilePicture) user.profilePicture = cloundRespone.secure_ur;
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



// suggest friends
export const getSuggestFriends = async (req, res) => {
    try {
        const suggestedUsers = await User.find({_id: {$ne: req.id}}).select("-password");
        if (!suggestedUsers) {
            return res.status(200).json({
                msg: "No suggested friends",
                success: false,
            });
        }
        return res.status(200).json({
            success : true,
            users: suggestedUsers
        });
    } catch (error) {   
        console.log(error);
    }
};



// follow or unfollow user
export const followOrUnfollow = async(req, res) => {
    try {
        const followID = req.id;
        const userID = req.params.id;
        if (followID === userID){
            return res.status(200).json({
                msg: "You can't follow yourself",
                success: false,
            });
        }
        const user = await User.findById(userID); // người được theo dõi
        const targerUser = await User.findById(followID); // người theo dõi

        if (!user || !targerUser){
            return res.status(404).json({
                msg: "User not found",
                success: false,
            });
        }

        const isFollowing = user.followings.includes(followID);
        if (isFollowing){
            // unfollow
            await Promise.all([
                User.updateOne({_id: followID}, {$pull: {followings: userID}}),
                User.updateOne({_id: userID}, {$pull: {followers: followID}})
            ])
            return res.status(200).json({
                msg: "Unfollowed",
                success: true,
            });
        } else{
            // follow
            await Promise.all([
                User.updateOne({_id: followID}, {$push: {followings: userID}}),
                User.updateOne({_id: userID}, {$push: {followers: followID}})
            ])
            return res.status(200).json({
                msg: "followed",
                success: true,
            });
        }
        const isFollower = targerUser.followers.includes(userID);
    } catch (error) {
        console.log(error);
    }
};