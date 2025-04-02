import express from "express";
import { sendMessage, getMessage } from "../controllers/messengeControllers/messengeControllers.js";
import upload from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route('/send/id:').post(isAuthenticated, sendMessage); // POST /api/v1/message/send/id 
router.route('/get/id:').get(isAuthenticated, getMessage); // GET /api/v1/message/get/id

export default router; 