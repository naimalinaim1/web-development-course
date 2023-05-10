import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProviders from "./providers/AuthProviders";
import Orders from "./components/Orders";
import PrivateRouter from "./routers/PrivateRouter";
import Profile from "./components/Profile";

// react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <Orders />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
