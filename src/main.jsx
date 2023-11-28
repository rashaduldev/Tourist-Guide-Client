import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
// import { Root } from 'postcss';
import Home from "./Pages/Home/Home";
import Root from "../src/Root/Root";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import AuthProvider from "./Provider/AuthProvider";
import Dashboard from "./LayOut/DashBoard";
import WishListPage from "./Pages/MyWishList/WishListPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dash from "./Pages/DashBoard/Dash";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "wishList",
        element: <Signup></Signup>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path: "/dashboard",
        element:<Dash></Dash>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
        <div className="">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
     </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
