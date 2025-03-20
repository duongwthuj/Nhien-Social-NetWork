import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

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

const POST = 8000;

app.listen(POST, () => {
    console.log(`Server is running on ${POST}`);
})