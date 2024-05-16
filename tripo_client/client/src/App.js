import logo from './logo.svg';
import './App.css';
import routerCollection from './routes';
import {createBrowserRouter,RouterProvider} from "react-router-dom"


function App() {
  return (
    <>
      <RouterProvider router={routerCollection}/>
    </>
  );
}

export default App;
