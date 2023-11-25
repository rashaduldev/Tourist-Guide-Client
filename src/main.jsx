import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Root } from 'postcss';
import Home from './Pages/Home/Home';
import Root from '../src/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
      {
        path: "/",
        element: <Home></Home>,
      }
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
