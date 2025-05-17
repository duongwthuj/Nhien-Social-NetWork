import mongoose from "mongoose";

// Định nghĩa schema cho model Conversation
const conversationSchema = new mongoose.Schema({
    participants: [{ // Danh sách người tham gia cuộc hội thoại
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{ // Danh sách tin nhắn trong cuộc hội thoại
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
})

// Tạo và export model Conversation
export const Conversation = mongoose.model('Conversation', conversationSchema);