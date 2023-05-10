import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: async ({ params }) =>
          fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/blogs/blog/:blogId",
        element: <BlogDetails />,
        loader: async ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
