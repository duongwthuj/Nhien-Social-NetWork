import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Card,
  CardContent,
  Tab,
  Tabs
} from '@mui/material';
import { Delete as DeleteIcon, Person as PersonIcon, Article as ArticleIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import axios from 'axios';

const AdminDashboard = () => {
  const [tab, setTab] = useState(0);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    activeUsers: 0,
    newUsersToday: 0
  });
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // Fetch thống kê
  const fetchStats = async () => {
    try {
      const { data } = await axios.get('/api/v1/admin/dashboard/stats');
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Fetch danh sách người dùng
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('/api/v1/admin/users');
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch danh sách bài viết
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get('/api/v1/admin/posts');
      if (data.success) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Xóa người dùng
  const handleDeleteUser = async (userId) => {
    try {
      const { data } = await axios.delete(`/api/v1/admin/users/${userId}`);
      if (data.success) {
        fetchUsers();
        fetchStats();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Xóa bài viết
  const handleDeletePost = async (postId) => {
    try {
      const { data } = await axios.delete(`/api/v1/admin/posts/${postId}`);
      if (data.success) {
        fetchPosts();
        fetchStats();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchUsers();
    fetchPosts();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Tabs value={tab} onChange={handleTabChange} centered sx={{ mb: 3 }}>
        <Tab icon={<DashboardIcon />} label="Thống kê" />
        <Tab icon={<PersonIcon />} label="Người dùng" />
        <Tab icon={<ArticleIcon />} label="Bài viết" />
      </Tabs>

      {/* Thống kê */}
      {tab === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tổng số người dùng
                </Typography>
                <Typography variant="h4">{stats.totalUsers}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tổng số bài viết
                </Typography>
                <Typography variant="h4">{stats.totalPosts}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Người dùng hoạt động
                </Typography>
                <Typography variant="h4">{stats.activeUsers}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Người dùng mới hôm nay
                </Typography>
                <Typography variant="h4">{stats.newUsersToday}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Quản lý người dùng */}
      {tab === 1 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tên người dùng</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Ngày tạo</TableCell>
                <TableCell>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Quản lý bài viết */}
      {tab === 2 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tác giả</TableCell>
                <TableCell>Nội dung</TableCell>
                <TableCell>Ngày đăng</TableCell>
                <TableCell>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post._id}>
                  <TableCell>{post._id}</TableCell>
                  <TableCell>{post.author.username}</TableCell>
                  <TableCell>{post.caption}</TableCell>
                  <TableCell>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default AdminDashboard;