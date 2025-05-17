// Import các thư viện cần thiết
import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
import path from "path";

// Cấu hình port cho server
const PORT = 3000;
const __dirname = path.resolve();

// Cấu hình các middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

// Cấu hình CORS để cho phép frontend truy cập
const corsOptions = {
    origin: "http://localhost:5173", // URL của frontend
    credentials: true // Cho phép gửi cookies
}
app.use(cors(corsOptions));

// Định nghĩa các routes cho API
app.use("/api/v1/user", userRoute);    // Route xử lý người dùng
app.use("/api/v1/post", postRoute);    // Route xử lý bài đăng
app.use("/api/v1/message", messageRoute); // Route xử lý tin nhắn

// Khởi động server
server.listen(PORT, () => {
    connectDB(); // Kết nối với database
    console.log(`Server listen at port ${PORT}`);
});