import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";

const routerCollection = createBrowserRouter(
    [
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:cid/:pid/details",
        element:<ProductDetails/>
      }
    ]
  )

  export default routerCollection;