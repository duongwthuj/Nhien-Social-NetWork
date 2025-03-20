import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post:{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true,
    }

}); 
export default Comment = mongoose.model('Comment', commentSchema); 