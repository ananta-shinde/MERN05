import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
const PostListing = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{
            setPosts(data.posts)
        });
    },[])
    return ( <>
    <div className="container">
        <div className="row g-3">
        {
            posts.map((p)=>(<>
            <div className="col-3">
                <Link className="text-decoration-none text-dark" to={"/posts/"+p.id}>
                <div className="card shadow p-4  " >
                    <div className="overflow-hidden p-2" style={{height:"250px"}}>
                        <h4>{p.title}</h4>
                        <p>{p.body}</p>
                    </div>
                    <div className="d-flex justify-content-around" style={{height:"40px"}}>
                        <p>Views : {p.views}</p>
                        <p>likes : {p.reactions.likes}</p>
                        <p>likes : {p.reactions.dislikes}</p>
                    </div>
                </div>
                </Link>
            </div>
            </>))
        }
        </div>
    </div>
    </> );
}
 
export default PostListing;