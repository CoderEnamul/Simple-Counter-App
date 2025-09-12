import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

export default function Posts() {

    const {isLoading, isError, posts, error} = useSelector((state) => state.posts);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [dispatch])

    let content;
    if(isLoading) {
      content =  <h2>Data is Loading...</h2>
    }
    if(!isLoading && isError) {
      content =  <h2>Something wrong happened - {error}</h2>
    }
    if(!isLoading && !isError) {
        if(posts.length > 0){
            content = (
                <ul>
                {posts.map((post) => (
                    <li key={posts.id} style={{listStyleType: "square",}}>{post.title}</li>
                ))}
            </ul>
            )
        }else{
           content = <h2>No Posts Here..!</h2>
        }
    }

  return (
    <div className='bg-yellow-50 p-10 mt-10 text-black rounded-xl shadow-md flex flex-col text-start justify-center space-y-5 shadow-yellow-50/20'>
      <h2>{content}</h2>
    </div>
  )
}
