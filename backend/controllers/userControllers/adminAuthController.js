import { User } from '../../models/user_model.js';
import jwt from 'jsonwebtoken';

// Đăng nhập cho admin
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra xem người dùng có tồn tại không
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Email hoặc mật khẩu không đúng'
            });
        }

        // Kiểm tra mật khẩu
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Email hoặc mật khẩu không đúng'
            });
        }

        // Kiểm tra role
        if (user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Bạn không có quyền truy cập trang admin'
            });
        }

        // Tạo token
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1d' }
        );

        // Lưu token vào cookie
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Kiểm tra trạng thái đăng nhập của admin
export const checkAdminAuth = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user || user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Không có quyền truy cập'
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};