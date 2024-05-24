import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './components/Home';
import Cabs from './components/Cabs';
import Hotels from './components/Hotels';

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
