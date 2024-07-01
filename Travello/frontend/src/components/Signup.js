import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEamil] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
         event.preventDefault()
        if(name != "" && email != "" && password != "")
        {
            fetch("http://localhost:5000/users",{
                method:"post",
                headers:{ "Content-Type":"application/json"},
                body:JSON.stringify({name,email,password})
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.status == 208)
                {
                    setError("User Already Exists")
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
                        <input className="form-control" placeholder="Full name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                        <input className="form-control mt-3" placeholder="Email" name="email" onChange={(e)=>{setEamil(e.target.value)}}/>
                        <input className="form-control mt-3" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className="btn btn-dark mt-3" type="submit">Create My Account</button>
                    </form> 
                </div>
            </div>
        </div>
    );
}
 
export default Signup;