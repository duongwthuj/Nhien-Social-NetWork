import { User } from "../models/user_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Đăng ký tài khoản
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(401).json({
                msg: "Please fill in all fields",
                success: false
            });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                msg: "User already exists",
                success: false
            });
        };
        const hashedPassword = await bcrypt.hash(password, 10); // dùng để mã hóa password trước khi lưu vào database 
        await user.create({
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            msg: "User created successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

// Đăng nhập
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                msg: "Please fill in all fields",
                success: false
            });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                msg: "User does not exist",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                msg: "Invalid credentials",
                success: false
            });
        }

        user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            bio: user.bio,
            followers: user.followers,
            followings: user.followings,
            posts: user.posts,
        }

        const token = await jwt.sign({
            userID: user._id
        },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );
        return res.cookie("token", token, { httpOnly: true, sameSite: 'strict', maxAge: 1 * 24 * 60 * 60 * 1000 }).json({
            msg: `Welcome back ${user.username}`,
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
    }
}


// Đăng xuất
export const logout = async (req, res) => {
    try {
        return res.cookie("token", "", {maxAge: 0 }).json({
            msg: "Logged out successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};
