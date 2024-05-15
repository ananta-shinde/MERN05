import { Link } from "react-router-dom";

const Home = () => {
    return ( <>
    <h3>Home component</h3>
    <Link to="/product/details">Go to product details</Link>
    </> );
}
 
export default Home;