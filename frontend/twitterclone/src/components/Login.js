import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex h-screen">
      {/* Ảnh bên trái */}
      <div className="w-1/2">
        <img
          src="/tea.jpg"
          alt="Tea Set"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form đăng nhập bên phải */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-gray-100">
        <h2 className="text-2xl font-bold text-green-700 mb-2">ĐĂNG NHẬP</h2>
        <p className="text-gray-600 mb-4">
          Vui lòng nhập số điện thoại và mật khẩu của bạn
        </p>

        <form className="space-y-3">
          {!isLogin && (
            <>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Họ và tên"
              />

              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Nhập lại mật khẩu"
              />
            </>
          )}

          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Tài khoản"
          />
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Mật khẩu"
          />

          {/* Nút đăng ký */}
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
          {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ NGAY"}
          </button>
          
          <p className="text-center text-gray-600 mt-2 font-semibold">
            {isLogin && (
              <>
                {" "}
                Bạn chưa có tài khoản?{" "}
                <a href="#" className="text-green-600 font-semibold" onClick={loginSignupHandler}>
                  ĐĂNG KÝ NGAY
                </a>
              </>
            )}
            {!isLogin && (
              <>
                {" "}
                Bạn đã có tài khoản?{" "}
                <a href="#" className="text-green-600 font-semibold" onClick={loginSignupHandler}>
                  ĐĂNG NHẬP NGAY
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
