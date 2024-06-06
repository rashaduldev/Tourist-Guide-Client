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
// import Dashboard from "./LayOut/DashBoard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dash from "./Pages/DashBoard/Dash";
import List from "./Pages/DashBoard/User/List/List";
import GuideDetails from "./Pages/DashBoard/TourGuide/GuideDetails";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SingleType from './Pages/TourType/SingleType';
import DetailsCard from "./Components/DetailsCard";
import Packages from "./Pages/AllPackages/Packages";
import PrivetRoute from "./Route/PrivetRoute";
import TourGuideuser from "./Components/TourGuideuser";
import Booking from "./Pages/DashBoard/User/Booking/Booking";
import DashBoard from "./LayOut/DashBoard";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "wishList",
        element: <Signup/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "allpackage",
        element: <Packages/>,
      },
      {
        path: 'guidedetails/:id',
        element: <GuideDetails/>,
      },
      {
        path: 'blogs',
        element: <Blogs/>,
      },
      {
        path: 'about',
        element: <AboutUs/>,
      },
      {
        path: 'contact',
        element: <ContactUs/>,
      },
      {
        path: 'single/:name',
        element: <SingleType/>,
      },
      {
        path: 'details/:id',
        element: <DetailsCard/>,
        loader:()=>fetch('https://tourist-guide-server-tawny.vercel.app/packages')
      },
      {
        path: 'detailsuser/:id',
        element: <TourGuideuser/>,
        loader:()=>fetch('https://tourist-guide-server-tawny.vercel.app/guides')

      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivetRoute><DashBoard/></PrivetRoute>,
    children:[
      {
        path: "/dashboard",
        element:<Dash/>
      },
      {
        path: "/dashboard/list",
        element:<List/>
      },
      {
        path: "/dashboard/booking",
        element:<Booking/>
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
