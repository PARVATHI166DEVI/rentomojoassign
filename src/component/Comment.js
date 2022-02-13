
import useFetch from "../customHook/useFetch";

const Comment = ({postId}) => {
    const {error, isPending, data:comments}= useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return ( 
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {comments && <div className="comment">
                <h3>Comments</h3>
                {comments.map((comment,index)=>{
                    return (<div key={index}>
                        <h5>{comment.name}</h5>
                        <p>{comment.body}</p>
                    </div>)
                })}
            </div>  
            }
        </div>
     );
}
 
export default Comment;