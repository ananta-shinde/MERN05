import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const [post,setPost] = useState(undefined)
    const [comments,setComments] = useState([])
    const {postId} = useParams()
    useEffect(()=>{
        fetch('https://dummyjson.com/posts/'+postId)
        .then(res => res.json())
        .then(data=>{
            setPost(data)
        });

        /* getting posts of comments with id 1 */
        fetch('https://dummyjson.com/posts/'+postId+'/comments')
        .then(res => res.json())
        .then(data=>{
            setComments(data.comments)
        });
    },[])

    return ( <>
         {post?
         <div className="card shadow p-4  " >
         <div className=" p-2" >
             <h4>{post.title}</h4>
             <p>{post.body}</p>
         </div>
         <div className="d-flex justify-content-around" >
             <p>Views : {post.views}</p>
             <p>likes : {post.reactions.likes}</p>
             <p>likes : {post.reactions.dislikes}</p>
         </div>
         <div>
            <h5 className="text-muted">Comments : </h5>
            {
                comments.map(c=>(<>
                    <h6>{c.user.fullName}</h6>
                    <p>{c.body}</p>
                </>))
            }
         </div>
     </div>

         :<p>Post Not Found</p>}
    </> );
}
 
export default PostDetails;