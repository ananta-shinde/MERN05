import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './components/Home';
import Cabs from './components/Cabs';
import Hotels from './components/Hotels';
import HotelListing from './components/HotelListing';
import PostListing from './components/PostListing';
import PostDetails from './components/PostDetails';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import AddNewHotel from './components/AddNewHotel';

const routers = createBrowserRouter([
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/hotels",
    element:<Hotels/>
  },
  {
    path:"/hotels/add",
    element:<AddNewHotel/>
  },
  {
    path:"/cabs",
    element:<Cabs/>
  },
  {
    path:"/hotel/list",
    element:<HotelListing/>
  },
  {
    path:"/posts",
    element:<PostListing/>
  },
  {
    path:"/posts/:postId",
    element:<PostDetails/>
  }
])


function App() {
  return (
     <>
       <RouterProvider router={routers}/>
     </>
  );
}

export default App;
