import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    caption:{
        type: String, 
        default: "",
    },
    image:{
        type: String,
        required: true, // 
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            default: [],
        }
    ],
    comment:[
        {
            text: mongoose.Types.ObjectId,
            ref: 'Comment',
        }
    ]
});
export default Post = mongoose.model('Post', postSchema); 