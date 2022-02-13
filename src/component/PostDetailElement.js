import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Comment from "./Comment";

const PostDetailElement = ({detail}) => {
    const [showComment, setShowComment] = useState(false);
    const history=useNavigate();
    const deletePost = ()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${detail.id}`;
        fetch(url,{method: "DELETE"})
         .then(()=>{history(`/users/${detail.userId}`)})
         .catch((err)=>{
             console.log(err);
         })
    }

    return ( 
        <div className="post-detail">
            <h3>{detail.title}</h3>
            <div>{detail.body}</div>
            <button onClick={deletePost}>Delete-Post</button>
            <button onClick={()=>{setShowComment(true)}}>Show-Comment</button>
            {showComment && <Comment postId={detail.id} />}
        </div>
     );
}
 
export default PostDetailElement;