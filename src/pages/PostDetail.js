import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import PostDetailElement from "../component/PostDetailElement";

const PostDetail = () => {
    const params = useParams();
    const {error, isPending, data:detail} = useFetch("https://jsonplaceholder.typicode.com/posts/"+params.id);
    return ( 
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {detail && <PostDetailElement detail={detail} />}
        </div>
     );
}
 
export default PostDetail;