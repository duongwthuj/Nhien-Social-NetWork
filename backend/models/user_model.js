import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    followers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    followings: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    posts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post',
        }
    ],
    bookmarks: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post',
        }
    ]

}, { timestamps: true });
export const User = mongoose.model('User', userSchema);