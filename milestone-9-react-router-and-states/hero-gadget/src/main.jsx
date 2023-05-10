import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { productsAndCartData } from "./loaders/getCart&ProductData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: productsAndCartData,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        loader: productsAndCartData,
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
