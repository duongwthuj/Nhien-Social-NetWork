import express from 'express';
import { User } from '../models/user_model.js';
import Post from '../models/post_model.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

// Middleware kết hợp
const adminAuth = [isAuthenticated, checkAdmin];

// Lấy thống kê tổng quan
router.get('/dashboard/stats', adminAuth, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalPosts = await Post.countDocuments();
        const activeUsers = await User.countDocuments({
            updatedAt: { $gte: new Date(Date.now() - 24*60*60*1000) }
        });

        res.status(200).json({
            success: true,
            stats: {
                totalUsers,
                totalPosts,
                activeUsers,
                newUsersToday: activeUsers
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Lấy danh sách người dùng
router.get('/users', adminAuth, async (req, res) => {
    try {
        const users = await User.find()
            .select('-password')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Xóa người dùng
router.delete('/users/:id', adminAuth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy người dùng'
            });
        }

        // Xóa tất cả bài viết của người dùng
        await Post.deleteMany({ author: req.params.id });

        res.status(200).json({
            success: true,
            message: 'Đã xóa người dùng và tất cả bài viết của họ'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Lấy danh sách bài viết
router.get('/posts', adminAuth, async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', 'username email')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            posts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Xóa bài viết
router.delete('/posts/:id', adminAuth, async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy bài viết'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Đã xóa bài viết thành công'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

export default router;