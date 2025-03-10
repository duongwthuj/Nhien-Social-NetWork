import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { PiArticleLight } from "react-icons/pi";


const postsData = [
    { id: 1, userID: "abc", postID: 123, likes: 2, comments: ["abc: test", "bcd: test"], savedBy: ["abc", "def"] },
    { id: 2, userID: "xyz", postID: 124, likes: 5, comments: ["xyz: nice", "uvw: cool"], savedBy: ["ghi", "jkl"] },
    { id: 3, userID: "mno", postID: 125, likes: 3, comments: ["mno: wow", "pqr: amazing"], savedBy: ["stu", "vwx"] }
];

export default function PostManagement() {
    const [posts, setPosts] = useState(postsData);
    const [search, setSearch] = useState("");

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
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
                        placeholder="Search by UserID"
                        className="border p-2 rounded w-1/3"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Post Table */}
                <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="p-2">UserID</th>
                            <th className="p-2">PostID</th>
                            <th className="p-2">Like</th>
                            <th className="p-2">Comment (by UserID)</th>
                            <th className="p-2">Save (by UserID)</th>
                            <th className="p-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {posts.filter(p => p.userID.includes(search)).map((post) => (
                            <tr key={post.id} className="border-b">
                                <td className="p-2">{post.userID}</td>
                                <td className="p-2">{post.postID}</td>
                                <td className="p-2">{post.likes}</td>
                                <td className="p-2">{post.comments.join(", ")}</td>
                                <td className="p-2">{post.savedBy.join(", ")}</td>
                                <td className="p-2">
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleDelete(post.id)}
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
