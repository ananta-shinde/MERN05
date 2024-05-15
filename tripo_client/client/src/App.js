import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routerCollection from './routes';


function App() {
  return (
    <>
      <RouterProvider router={routerCollection}/>
    </>
  );
}

export default App;
