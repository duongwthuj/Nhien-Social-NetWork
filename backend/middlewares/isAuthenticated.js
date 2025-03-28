import jwt from "jsonwebtoken";


const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                msg: "User not authenticated",
                success: false,
            });
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        console.log("decode:", decode);
        if (!decode) {
            return res.status(401).json({
                msg: "Invalid",
                success: false,
            });
        }
        req.id = decode.userId || decode.userID;
        next(); // next middleware
    } catch (error) {
        console.log("Lỗi trong isAuthenticated:", error);
        return res.status(401).json({
            msg: "Lỗi xác thực token",
            success: false,
            error: error.message,
        });
    }

};

export default isAuthenticated;