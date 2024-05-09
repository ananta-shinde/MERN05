import { useState } from "react";

const SignUp = (props) => {
   
   const  handleClick = ()=>{
          props.setIsloggedIn("login");
    }

    return ( <>
            <div className="container" >
                <div className="row" style={{height:"100vh"}}>
                    <div className="col-6"></div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                       
                        <form className="w-100" >
                            <h3 className="text-center m-5">TRIPO</h3>
                            <div class="alert alert-danger"></div>
                            <div className="mb-3">
                                <label className="text-muted">Username Or Email</label>
                                <input className="form-control" type="email" name="email" />
                            </div>
                            <div>
                                <label className="text-muted">Password</label>
                                <input className="form-control" type="password" name="password"/>
                            </div>  
                            <div className="text-end mt-2">
                                <a href="#" onClick={handleClick}>Already have account ? sign in</a>
                            </div> 
                            <div className="my-3">
                                <button className="btn btn-dark w-100" type="submit"> Sign Up </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </> );
}
 
export default SignUp;