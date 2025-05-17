import {Conversation} from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import {Message} from "../models/message.model.js"
// for chatting
export const sendMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const {textMessage:message} = req.body;
      
        // Tìm cuộc hội thoại giữa người gửi và người nhận
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId, receiverId]}
        });
        
        // Tạo cuộc hội thoại mới nếu chưa có
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        };
        
        // Tạo tin nhắn mới
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        
        // Thêm tin nhắn vào cuộc hội thoại
        if(newMessage) conversation.messages.push(newMessage._id);

        // Lưu cả cuộc hội thoại và tin nhắn
        await Promise.all([conversation.save(),newMessage.save()])

        // Gửi tin nhắn realtime qua socket.io
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        return res.status(201).json({
            success:true,
            newMessage
        })
    } catch (error) {
        console.log(error);
    }
}
export const getMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        
        // Tìm cuộc hội thoại và lấy tất cả tin nhắn
        const conversation = await Conversation.findOne({
            participants:{$all: [senderId, receiverId]}
        }).populate('messages');
        
        // Trả về mảng rỗng nếu chưa có cuộc hội thoại
        if(!conversation) return res.status(200).json({success:true, messages:[]});

        return res.status(200).json({success:true, messages:conversation?.messages});
        
    } catch (error) {
        console.log(error);
    }
}