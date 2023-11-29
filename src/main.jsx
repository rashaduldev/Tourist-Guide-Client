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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dash from "./Pages/DashBoard/Dash";
import List from "./Pages/DashBoard/User/List/List";
import AllPackages from "./Pages/AllPackages/AllPackages";
import GuideDetails from "./Pages/DashBoard/TourGuide/GuideDetails";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SingleType from './Pages/TourType/SingleType';
import DetailsCard from "./Components/DetailsCard";
import Packages from "./Pages/AllPackages/Packages";
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
      {
        path: "allpackage",
        element: <Packages></Packages>,
      },
      {
        path: 'guidedetails/:id',
        element: <GuideDetails></GuideDetails>,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: 'single/:name',
        element: <SingleType></SingleType>,
      },
      {
        path: 'details/:id',
        element: <DetailsCard></DetailsCard>,
        loader:()=>fetch('http://localhost:8000/packages')
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
      },
      {
        path: "/dashboard/list",
        element:<List></List>
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
