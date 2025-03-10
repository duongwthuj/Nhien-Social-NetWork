import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import NotiPage from "./NotiPage";
import ChatPage from "./ChatPage";
import SearchPage from "./SearchPage";
import SavePage from "./SavePage";
import UserManagement from "./UserManagement";
import PostManagement from "./PostManagement";

const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
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
    element: <UserManagement />,

  },

  {
    path: "/post",
    element: <PostManagement />,
  }
]);

function Router() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Router;