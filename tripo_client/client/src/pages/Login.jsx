
const Login = () => {

    const handlelogin = (e)=>{
        e.preventDefault();
        var user = {};
        for(var i=0;i<e.target.length;i++)
        {
            var key = e.target[i].name
            var data = e.target[i].value
            user[key] = data
             
        }
        console.log(user)
    }
    return ( <>
            <div className="container" >
                <div className="row" style={{height:"100vh"}}>
                    <div className="col-6"></div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                       
                        <form className="w-100" onSubmit={handlelogin}>
                            <h3 className="text-center m-5">TRIPO</h3>
                            <div className="mb-3">
                                <label className="text-muted">Username Or Email</label>
                                <input className="form-control" type="text" name="email"/>
                            </div>
                            <div>
                                <label className="text-muted">Password</label>
                                <input className="form-control" type="password" name="password"/>
                            </div>  
                            <div className="text-end mt-2">
                                <a href="#">forgot password ?</a>
                            </div> 
                            <div className="my-3">
                                <button className="btn btn-dark w-100" type="submit"> Sign In </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </> );
}
 
export default Login;