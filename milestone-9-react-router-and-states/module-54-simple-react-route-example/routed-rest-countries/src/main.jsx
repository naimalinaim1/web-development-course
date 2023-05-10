import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Oops! not found</p>,
    children: [
      {
        path: "/",
        element: <Countries />,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "country/:cca3",
        element: <div>country info</div>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
