import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
const SignIn = () => {
   
    const [email,setEamil] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
         event.preventDefault()
        if( email != "" && password != "")
        {
            fetch("http://localhost:5000/users/signin",{
                method:"post",
                headers:{ "Content-Type":"application/json"},
                body:JSON.stringify({email,password})
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.status == 403)
                {
                    setError("Invalid Creds")
                }
                else if(data.status == 404){
                    setError("User Not Found")
                }
                else{
                    setError("")
                    localStorage.setItem("user",JSON.stringify({_id:data._id,name:data.name}))
                    navigate("/")    
                }
            })
        }else{
            setError("All fields are compulsary")
        }

    }
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6 p-4">
                    <h5>Welcome User, Please create account</h5>
                    <form onSubmit={handleSubmit} className="bg-light shadow p-4">
                        {error != "" && <div className="alert alert-danger">{error}</div>}
                        <input className="form-control mt-3" placeholder="Email" name="email" onChange={(e)=>{setEamil(e.target.value)}}/>
                        <input type="password" className="form-control mt-3" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className="btn btn-dark mt-3" type="submit">Sign IN</button>
                    </form> 

                    <div>
                        <Link to="/signup">Dont have account? create here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;