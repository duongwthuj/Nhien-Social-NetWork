import {Server} from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        methods:['GET','POST'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization']
    },
    pingTimeout: 60000,
    pingInterval: 25000,
    transports: ['websocket', 'polling']
})

const userSocketMap = {} ; // this map stores socket id corresponding the user id; userId -> socketId

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on('connection', (socket)=>{
    console.log('Client mới kết nối:', socket.id);
    const userId = socket.handshake.query.userId;
    console.log('User ID từ client:', userId);
    
    if(userId){
        userSocketMap[userId] = socket.id;
        console.log('Đã lưu mapping cho user:', userId);
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect',()=>{
        console.log('Client ngắt kết nối:', socket.id);
        if(userId){
            delete userSocketMap[userId];
            console.log('Đã xóa mapping cho user:', userId);
        }
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
})

export {app, server, io};