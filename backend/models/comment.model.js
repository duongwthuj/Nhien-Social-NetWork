import mongoose from "mongoose";

// Định nghĩa schema cho model Comment
const commentSchema = new mongoose.Schema({
    text: { type: String, required: true }, // Nội dung bình luận (bắt buộc)
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Tác giả bình luận (bắt buộc)
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }, // Bài đăng được bình luận (bắt buộc)
});

// Tạo và export model Comment
export const Comment = mongoose.model('Comment', commentSchema);