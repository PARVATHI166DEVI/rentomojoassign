import { Link } from "react-router-dom";

const PostList = ({posts}) => {
    return ( 
        <div className="post-list">
            <h3>List of Posts</h3>
            {posts.map((post,index)=>{
                return (<div key={index}><Link to={`/posts/${post.id}`}>{post.title}</Link></div>);
            })}
        </div>
     );
}
 
export default PostList;