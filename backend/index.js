import express, { application, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utlis/db.js';
import userRouter from './routes/user_route.js';
dotenv.config({}); // load các biến môi trường từ file .env vào process.env

const app = express();
const PORT = process.env.PORT || 3000; // lấy port từ file .env hoặc mặc định là 5000


// hàm get sẽ nhận vào 2 tham số là req và res, req là request từ client, res là response từ server để trả về cho client 
app.get("/", (req,res) => {
    return res.status(200).json(
        {
            message: "test Backend",
            success: true
        }
    )
})


// middleware là một hàm có thể truy cập vào các request, response object và next middleware function trong chuỗi middleware của ứng dụng.
app.use(express.json()); // middleware để nhận dữ liệu từ client
app.use(cookieParser()); // middleware để xử lý cookie
app.use(urlencoded({ extended: true })); // middleware để nhận dữ liệu từ form 
const corsOptions = { // cấu hình cors 
    origin: ["http://localhost:5173"], // chỉ cho phép các domain này gửi request
    credentials: true, // cho phép gửi cookie
    optionsSuccessStatus: 200 // trả về status 200 cho các request options 
}
app.use(cors(corsOptions));
app.use("/api/v1/user", userRouter); // gọi đường dẫn /api/v1/user sẽ vào file userRouter



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB(); // kết nối database
})