import Conversation from "../../models/conversation.js";
import Message from "../../models/message_model.js";

export const sendMessage = async (req, res) => {
    try {
        const sendId = req.id;
        const receiveId = req.params.id;
        const {message} = req.body;

        let conversation = await Conversation.findOne({
            participants: { $all: [sendId, receiveId] },
        })

        if (!conversation){
            conversation = await Conversation.create({
                participants: [sendId, receiveId],
            })
        }

        const newMessage = await Message.create({
            sendId,
            receiveId,
            message,
        })

        if (newMessage){
            conversation.messages.push(newMessage._id)
            // await conversation.save()
        }
        await Promise.all([
            conversation.save(),
            newMessage.save()
        ])
        
        // implement socket io here 
        return res.status(200).json({
            newMessage,
            success: true,
            
        })

    } catch (error) {
        console.log(error);
    }
}

export const getMessage = async (req, res) => {
    try {
        const sendId = req.id;
        const receiveId = req.params.id; 
        const conversation = await Conversation.find({
            participants: { $all: [sendId, receiveId] },
        })

        if (!conversation){
            return res.status(404).json({
                msg: "Conversation not found",
                success: false,
            })
        }

        return res.status(200).json({
            success:true,
            messages: conversation?.messages,
        })
    } catch (error) {
        console.log(error);
    }
}