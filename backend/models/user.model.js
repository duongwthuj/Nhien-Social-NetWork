import mongoose from "mongoose";

// Định nghĩa schema cho model User
const userSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true}, // Tên người dùng (bắt buộc và duy nhất)
    email:{type:String,required:true,unique:true}, // Email (bắt buộc và duy nhất)
    password:{type:String,required:true}, // Mật khẩu (bắt buộc)
    profilePicture:{type:String,default:''}, // Ảnh đại diện (mặc định rỗng)
    bio:{type:String, default:''}, // Tiểu sử (mặc định rỗng)
    gender:{type:String,enum:['male','female']}, // Giới tính (chỉ được chọn male hoặc female)
    followers:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}], // Danh sách người theo dõi
    following:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}], // Danh sách người đang theo dõi
    posts:[{type:mongoose.Schema.Types.ObjectId, ref:'Post'}], // Danh sách bài đăng
    bookmarks:[{type:mongoose.Schema.Types.ObjectId, ref:'Post'}] // Danh sách bài đăng đã đánh dấu
},{timestamps:true}); // Tự động thêm createdAt và updatedAt

// Tạo và export model User
export const User = mongoose.model('User', userSchema);