import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:postId",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <div>44444444444440444444444444444</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
