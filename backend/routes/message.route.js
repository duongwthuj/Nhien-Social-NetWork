// Import các thư viện và controllers cần thiết
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// Định nghĩa các routes cho tin nhắn
router.route('/send/:id').post(isAuthenticated, sendMessage); // Route gửi tin nhắn
router.route('/all/:id').get(isAuthenticated, getMessage); // Route lấy tất cả tin nhắn
 
export default router;