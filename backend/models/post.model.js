import mongoose from "mongoose";

// Định nghĩa schema cho model Post
const postSchema = new mongoose.Schema({
    caption:{type:String, default:''}, // Nội dung bài đăng (mặc định rỗng)
    image:{type:String, required:true}, // URL ảnh (bắt buộc)
    author:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true}, // Tác giả bài đăng (bắt buộc)
    likes:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}], // Danh sách người thích
    comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}], // Danh sách bình luận
});

// Tạo và export model Post
export const Post = mongoose.model('Post', postSchema);