import { Link } from "react-router-dom";
import AppMainNav from "./AppMainNav";
import { useEffect, useState } from "react";

const Home = () => {
    const [user,setUser] = useState(null)

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("user")))
    },[])
    return ( <>
         <AppMainNav user={user} setUser={setUser}/>
         <div className="container d-flex justify-content-center p-2">
            <Link className="mega-menu bg-light p-2" to="/hotels">Hotels</Link>
            <Link className="mega-menu bg-light p-2" to="/cabs">Cab</Link>
         </div>
         
    </> );
}
 
export default Home;

 