import { useEffect, useState } from 'react'
import ChatPage from './components/ChatPage'
import EditProfile from './components/EditProfile'
import Home from './components/Home'
import Login from './components/Login'
import MainLayout from './components/MainLayout'
import Profile from './components/Profile'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux'
import { setOnlineUsers } from './redux/chatSlice'
import { setLikeNotification } from './redux/rtnSlice'
import ProtectedRoutes from './components/ProtectedRoutes'
import { SocketContext } from './context/SocketContext.js'


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes><MainLayout /></ProtectedRoutes>,
    children: [
      {
        path: '/',
        element: <ProtectedRoutes><Home /></ProtectedRoutes>
      },
      {
        path: '/profile/:id',
        element: <ProtectedRoutes> <Profile /></ProtectedRoutes>
      },
      {
        path: '/account/edit',
        element: <ProtectedRoutes><EditProfile /></ProtectedRoutes>
      },
      {
        path: '/chat',
        element: <ProtectedRoutes><ChatPage /></ProtectedRoutes>
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])

function App() {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const socketio = io('http://localhost:3000', {
        query: {
          userId: user?._id
        },
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000
      });

      // Thêm các event listeners để debug
      socketio.on('connect_error', (error) => {
        console.error('Lỗi kết nối socket:', error);
      });

      socketio.on('connect', () => {
        console.log('Kết nối socket thành công');
      });

      socketio.on('disconnect', (reason) => {
        console.log('Socket bị ngắt kết nối:', reason);
      });

      setSocket(socketio);
      socketio.on('getOnlineUsers', (users) => {
        dispatch(setOnlineUsers(users));
      });
      // cleanup
      return () => {
        socketio.disconnect();
      };
    }
  }, [user, dispatch]);

  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={browserRouter} />
    </SocketContext.Provider>
  )
}

export default App
