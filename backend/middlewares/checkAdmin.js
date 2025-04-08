import { User } from '../models/user_model.js';

const checkAdmin = async (req, res, next) => {
    try {
        // Kiểm tra xem người dùng có phải là admin không
        const user = await User.findById(req.user._id);
        if (!user || user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Bạn không có quyền truy cập trang này'
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export default checkAdmin;