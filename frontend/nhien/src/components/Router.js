import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import NotiPage from "./NotiPage";
import ChatPage from "./ChatPage";
import SearchPage from "./SearchPage";
import SavePage from "./SavePage";
import AdminDashboard from "./AdminDashboard";
import { useAuth } from "../context/AuthContext";

// Protected Route component to check if user is authenticated
const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" />;
  }
  
  if (requireAdmin && user.role !== 'admin') {
    return <Navigate to="/home" />;
  }
  
  return children;
};

const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "notifications",
        element: <NotiPage />,
      },
      {
        path: "messages",
        element: <ChatPage />,
      },
      {
        path: "SavePage",
        element: <SavePage />,
      }
    ],
  },

  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute requireAdmin={true}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Router;