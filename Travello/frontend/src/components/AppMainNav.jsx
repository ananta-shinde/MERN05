import { Link } from "react-router-dom";

const AppMainNav = (props) => {

    const handleLogout = ()=>{
        localStorage.removeItem("user")
        props.setUser(null)
    }
    return ( 
        <nav>
            <div className="container p-2">
                <div className="row">
                    <h5 className="nav-brand col">Travello</h5>
                    <div className="col-2">
                        {props.user != null &&
                        <div>
                            <p className="">{props.user.name}</p>
                            <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
                        </div>
                        }{
                            props.user == null && <Link className="btn btn-dark" to="/signin">Signin</Link>
                        }
                    </div>
                    
                </div>
                
            </div>
            
        </nav>
     );
}
 
export default AppMainNav;