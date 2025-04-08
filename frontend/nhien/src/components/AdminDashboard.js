import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Đăng ký các thành phần Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    activeUsers: 0,
    newUsersToday: 0,
    newPostsToday: 0
  });

  // Mock data for demonstration
  useEffect(() => {
    // Simulate fetching data from backend
    const mockUsers = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: '********', role: 'user', createdAt: '2023-01-15' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: '********', role: 'user', createdAt: '2023-02-20' },
      { id: 3, username: 'admin', email: 'admin@example.com', password: '********', role: 'admin', createdAt: '2023-01-01' },
      { id: 4, username: 'user3', email: 'user3@example.com', password: '********', role: 'user', createdAt: '2023-03-10' },
      { id: 5, username: 'user4', email: 'user4@example.com', password: '********', role: 'user', createdAt: '2023-04-05' },
    ];

    const mockPosts = [
      { id: 1, title: 'First Post', content: 'This is the first post content', author: 'user1', createdAt: '2023-01-16', likes: 5, comments: 2 },
      { id: 2, title: 'Second Post', content: 'This is the second post content', author: 'user2', createdAt: '2023-02-21', likes: 3, comments: 1 },
      { id: 3, title: 'Third Post', content: 'This is the third post content', author: 'user3', createdAt: '2023-03-11', likes: 7, comments: 4 },
      { id: 4, title: 'Fourth Post', content: 'This is the fourth post content', author: 'user4', createdAt: '2023-04-06', likes: 2, comments: 0 },
    ];

    setUsers(mockUsers);
    setPosts(mockPosts);
    setStats({
      totalUsers: mockUsers.length,
      totalPosts: mockPosts.length,
      activeUsers: 3,
      newUsersToday: 1,
      newPostsToday: 1
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
      setStats(prev => ({ ...prev, totalUsers: prev.totalUsers - 1 }));
    }
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
      setStats(prev => ({ ...prev, totalPosts: prev.totalPosts - 1 }));
    }
  };

  // Dữ liệu cho biểu đồ người dùng theo tháng
  const userChartData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Người dùng mới',
        data: [2, 1, 1, 1, 0, 0],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
      },
    ],
  };

  // Dữ liệu cho biểu đồ bài viết theo tháng
  const postChartData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Bài viết mới',
        data: [1, 1, 1, 1, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ tròn phân bố người dùng
  const userDistributionData = {
    labels: ['Người dùng thường', 'Quản trị viên'],
    datasets: [
      {
        data: [4, 1],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Cấu hình cho biểu đồ
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Thống kê theo thời gian',
      },
    },
  };

  const renderDashboard = () => {
    return (
      <div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Chào mừng đến với Trang Quản Trị</h2>
          <p className="text-gray-600 mb-4">
            Trang quản trị này cung cấp các công cụ để quản lý người dùng, bài viết và theo dõi thống kê của trang web.
            Bạn có thể sử dụng các tab bên trên để điều hướng giữa các chức năng khác nhau.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-800">Quản lý người dùng</h3>
              <p className="text-sm text-green-600">Xem, thêm, sửa và xóa thông tin người dùng</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-medium text-blue-800">Quản lý bài viết</h3>
              <p className="text-sm text-blue-600">Xem, thêm, sửa và xóa bài viết trên trang web</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-medium text-purple-800">Thống kê</h3>
              <p className="text-sm text-purple-600">Theo dõi số liệu thống kê về người dùng và bài viết</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Tổng số người dùng</h3>
            <p className="text-3xl font-bold text-green-600">{stats.totalUsers}</p>
            <p className="text-sm text-gray-500">+{stats.newUsersToday} hôm nay</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Tổng số bài viết</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalPosts}</p>
            <p className="text-sm text-gray-500">+{stats.newPostsToday} hôm nay</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Người dùng đang hoạt động</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.activeUsers}</p>
            <p className="text-sm text-gray-500">30 ngày gần đây</p>
          </div>
        </div>

        {/* Biểu đồ thống kê */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Người dùng mới theo tháng</h3>
            <Line options={chartOptions} data={userChartData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Bài viết mới theo tháng</h3>
            <Bar options={chartOptions} data={postChartData} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Phân bố người dùng</h3>
            <div className="flex justify-center">
              <div className="w-3/4">
                <Pie data={userDistributionData} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Tương tác bài viết</h3>
            <div className="space-y-4">
              {posts.map(post => (
                <div key={post.id} className="border-b pb-2">
                  <h4 className="font-medium">{post.title}</h4>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Lượt thích: {post.likes}</span>
                    <span>Bình luận: {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderUserManagement = () => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Quản lý người dùng</h2>
          <p className="text-sm text-gray-600 mt-1">
            Quản lý thông tin người dùng, bao gồm tên đăng nhập, email, vai trò và ngày tạo tài khoản.
            Bạn có thể xóa hoặc chỉnh sửa thông tin người dùng từ bảng bên dưới.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên đăng nhập</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vai trò</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role === 'admin' ? 'Quản trị viên' : 'Người dùng'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-red-600 hover:text-red-900 mr-3"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Xóa
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderPostManagement = () => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Quản lý bài viết</h2>
          <p className="text-sm text-gray-600 mt-1">
            Quản lý bài viết trên trang web, bao gồm tiêu đề, tác giả, ngày tạo, số lượt thích và bình luận.
            Bạn có thể xóa hoặc chỉnh sửa bài viết từ bảng bên dưới.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tác giả</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lượt thích</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bình luận</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map(post => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.likes}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.comments}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-red-600 hover:text-red-900 mr-3"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      Xóa
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-green-700">Trang Quản Trị</h1>
              </div>
              <nav className="ml-6 flex space-x-8">
                <button
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'dashboard'
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Tổng quan
                </button>
                <button
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'users'
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('users')}
                >
                  Người dùng
                </button>
                <button
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'posts'
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('posts')}
                >
                  Bài viết
                </button>
              </nav>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-4">Xin chào, {user?.username || 'Admin'}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'users' && renderUserManagement()}
        {activeTab === 'posts' && renderPostManagement()}
      </main>
    </div>
  );
};

export default AdminDashboard; 