import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './Components/Navigation/Home';
import Contact from './Components/Contact';
import SeemoreProduct from './Components/SeemoreProduct';
import SeemoreShop from './Components/Shop/SeemoreShop';
import SignIn from './Components/Header/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    },
    {
      path:"/home",
      element:<Home></Home>, 
     },
     {
       path:'/contact',
       element:<Contact></Contact>,
     },
     {
      path:'/seemoreProduct',
      element:<SeemoreProduct></SeemoreProduct>
     },
     {
      path:'seemoreshop',
      element:<SeemoreShop></SeemoreShop>
     },
     {
      path:'signin',
      element:<SignIn></SignIn>
     }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
