import { Link } from "react-router-dom";

const Home = () => {
    return ( <>
         <h4>Home page</h4>
         <Link to="/hotels">Book Hotels</Link>
         <Link to="/cabs">Book Cab</Link>
    </> );
}
 
export default Home;

 