import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import PostList from "../component/PostList";

const Posts = () => {
    const params=useParams()
    const {error, isPending, data : posts} = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}&skip=0&limit=10`);
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {posts && <PostList posts={posts} />}
        </div>  
      );
}
 
export default Posts;