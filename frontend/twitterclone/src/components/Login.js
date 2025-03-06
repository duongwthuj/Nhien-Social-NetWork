import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import để điều hướng

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // Trạng thái lỗi
  const navigate = useNavigate(); // Hook để điều hướng trang

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
    setError(""); // Xóa lỗi khi chuyển giữa đăng nhập và đăng ký
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn form reload trang

    if (isLogin) {
      if (username === "admin" && password === "123") {
        navigate("/home"); // Chuyển đến trang chủ nếu đúng tài khoản
      } else {
        setError("Sai tài khoản hoặc mật khẩu!"); // Hiển thị lỗi
      }
    } else {
      // Xử lý đăng ký (chưa có logic backend)
      console.log("Đăng ký với", { fullName, email, username, password });
      setIsLogin(true);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <img
            className="w-[70px]"
            src="https://images-platform.99static.com//MzO1SotayLU5iqeWo6jbz24c6bE=/991x3126:1773x3908/fit-in/590x590/99designs-contests-attachments/156/156081/attachment_156081204"
            alt="icon"
          />
        </div>
        <h2 className="text-xl font-bold text-center text-green-700 mb-2">
          {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
        </h2>
        <p className="text-gray-600 text-center mb-4">
          {isLogin
            ? "Vui lòng nhập tài khoản và mật khẩu"
            : "Vui lòng nhập thông tin để đăng ký"}
        </p>

        <form className="space-y-3" onSubmit={handleLogin}>
          {!isLogin && (
            <>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Họ và tên"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#00a991] text-white py-2 rounded-lg font-semibold"
          >
            {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ NGAY"}
          </button>

          <p className="text-center text-gray-600 mt-2 font-semibold">
            {isLogin ? (
              <>Bạn chưa có tài khoản?{" "}
              <span
                className="text-green-600 font-semibold cursor-pointer"
                onClick={loginSignupHandler}
              >
                ĐĂNG KÝ
              </span>
              </>
            ) : (
              <>Bạn đã có tài khoản?{" "}
              <span
                className="text-green-600 font-semibold cursor-pointer"
                onClick={loginSignupHandler}
              >
                ĐĂNG NHẬP
              </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
