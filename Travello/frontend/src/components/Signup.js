import { useState } from "react";

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEamil] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (event)=>{
         event.preventDefault()
         console.log()
        fetch("http://localhost:5000/users",{
            method:"post",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify({name,email,password})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }
    return ( <form onSubmit={handleSubmit}>
        <input placeholder="Full name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder="Email" name="email" onChange={(e)=>{setEamil(e.target.value)}}/>
        <input placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">Create My Account</button>
    </form> );
}
 
export default Signup;