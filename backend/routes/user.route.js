import express from "express";
import { editProfile, followOrUnfollow, getProfile, getSuggestedUsers, login, logout, register } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Định nghĩa các routes cho người dùng
router.route('/register').post(register); // Route đăng ký tài khoản
router.route('/login').post(login); // Route đăng nhập
router.route('/logout').get(logout); // Route đăng xuất
router.route('/:id/profile').get(isAuthenticated, getProfile); // Route xem thông tin profile
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile); // Route chỉnh sửa profile
router.route('/suggested').get(isAuthenticated, getSuggestedUsers); // Route lấy danh sách người dùng đề xuất
router.route('/followorunfollow/:id').post(isAuthenticated, followOrUnfollow); // Route theo dõi/bỏ theo dõi người dùng

export default router;