import mongoose from "mongoose";

const tweedSchema = new mongoose.Schema({
    descreption: {
        type: String,
        required: true
    },
    likes:{
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bookMarked:{
        type: Array,
        default: []
    }

}, { timestamps: true });

export const User = mongoose.model('User', userSchema);