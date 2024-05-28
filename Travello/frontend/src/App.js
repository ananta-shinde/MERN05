import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './components/Home';
import Cabs from './components/Cabs';
import Hotels from './components/Hotels';
import HotelListing from './components/HotelListing';

const routers = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/hotels",
    element:<Hotels/>
  },
  {
    path:"/cabs",
    element:<Cabs/>
  },
  {
    path:"/hotel/list",
    element:<HotelListing/>
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
