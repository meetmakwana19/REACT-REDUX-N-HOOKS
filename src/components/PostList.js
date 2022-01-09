import { useSelector } from "react-redux";
import { getAllPosts, getFetchPosts } from "../reduxStore/posts/reducers/postsReducer"

const PostList = () => {

    const posts = useSelector(getAllPosts)
    const isFetching = useSelector(getFetchPosts)
    // const err = useSelector(getError)
    console.log(posts);

    // to see this on the output, throttle, fast/slow 3G on the devtools.
    if (isFetching) {
        return <span>Loading...</span>
    }
    return (
        <div>
            <h3>Blog Posts :</h3>
            <div className="container">
                {posts.map((post) => {
                    return (
                        <div className="container px-3 py-2 m-2" key={post._id} style={{border:"1px solid white", borderRadius:"5px"}}>
                            <h5><u>{post.title}</u></h5>
                            <h6>{post.author}</h6>
                            <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default PostList;