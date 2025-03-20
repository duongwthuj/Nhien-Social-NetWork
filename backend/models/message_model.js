import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senerId:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    receiverId:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    message:{
        type: String,
        required: true,
    },
});
export default Message = mongoose.model('Message', messageSchema); 