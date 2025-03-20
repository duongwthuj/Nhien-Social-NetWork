import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { PiArticleLight } from "react-icons/pi";


const usersData = [
    { id: 1, name: "Nguyễn Hoàng", email: "hoangnguyen@gmail.com", role: "admin", password: "abc", userID: 123, status: "Hoạt động" },
    { id: 2, name: "Trần Văn B", email: "tranvanb@gmail.com", role: "editor", password: "xyz", userID: 124, status: "Hoạt động" },
    { id: 3, name: "Lê Thị C", email: "lethic@gmail.com", role: "user", password: "12345", userID: 125, status: "Đã khóa" },
    { id: 4, name: "Phạm Quốc D", email: "phamquocd@gmail.com", role: "admin", password: "pass123", userID: 126, status: "Hoạt động" },
    { id: 5, name: "Đặng Văn E", email: "dangvane@gmail.com", role: "user", password: "98765", userID: 127, status: "Đã khóa" },
    { id: 6, name: "Bùi Thanh F", email: "buithanhf@gmail.com", role: "editor", password: "qwerty", userID: 128, status: "Hoạt động" },
    { id: 7, name: "Ngô Minh G", email: "ngominhg@gmail.com", role: "user", password: "abcdef", userID: 129, status: "Hoạt động" },
    { id: 8, name: "Hoàng Hải H", email: "hoanghaih@gmail.com", role: "admin", password: "zxcvbn", userID: 130, status: "Hoạt động" },
    { id: 9, name: "Lý Phương I", email: "lyphuongi@gmail.com", role: "user", password: "pass789", userID: 131, status: "Đã khóa" },
    { id: 10, name: "Vũ Thị J", email: "vuthij@gmail.com", role: "editor", password: "pass111", userID: 132, status: "Hoạt động" }
];

export default function UserManagement() {
    const [users, setUsers] = useState(usersData);
    const [search, setSearch] = useState("");

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-200 p-4">
                <h2 className="font-bold">QUẢN LÝ</h2>
                <div className="flex flex-col">
                    <Link to="/admin" className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-green-200">
                        <CiUser size="24px" />
                        <span>Khách hàng</span>
                    </Link>

                    <Link to="/post" className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-green-200">
                        <PiArticleLight size="24px" />
                        <span>Bài đăng</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4">
                {/* Search Bar */}
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border p-2 rounded w-1/3"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* User Table */}
                <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="p-2">Tên</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Tài khoản</th>
                            <th className="p-2">Mật khẩu</th>
                            <th className="p-2">userID</th>
                            <th className="p-2">Tình trạng</th>
                            <th className="p-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {users.filter(u => u.name.includes(search)).map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user.role}</td>
                                <td className="p-2">{user.password}</td>
                                <td className="p-2">{user.userID}</td>
                                <td className={`p-2 ${user.status === "Hoạt động" ? "text-green-500" : "text-red-500"}`}>{user.status}</td>
                                <td className="p-2">
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleDelete(user.id)}
                                    >Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
