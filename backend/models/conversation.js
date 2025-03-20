import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    message:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Message',
        }
    ]
});
export default Conversation = mongoose.model('Conversation', conversationSchema);