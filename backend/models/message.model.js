import mongoose from "mongoose";

// Định nghĩa schema cho model Message
const messageSchema = new mongoose.Schema({
    senderId: { // ID người gửi tin nhắn
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId: { // ID người nhận tin nhắn
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: { // Nội dung tin nhắn (bắt buộc)
        type: String,
        required: true
    }
});

// Tạo và export model Message
export const Message = mongoose.model('Message', messageSchema);