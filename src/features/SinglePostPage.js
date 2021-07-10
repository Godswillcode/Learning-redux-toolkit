import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "./SinglePostSlice";



const SinglePostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.singlePosts);
//   const postStatus = useSelector((state) => state.posts.status);

//   console.log(postStatus);
  console.log(post);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);



  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};


export default SinglePostPage;
