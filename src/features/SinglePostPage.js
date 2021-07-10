import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "./SinglePostSlice";

const SinglePostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const singlePost = useSelector((state) => state.singlePost.list);
    const postStatus = useSelector((state) => state.posts.status);

    console.log(postStatus);


  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h2>hello</h2>
      <p>{singlePost?.title}</p>
    </div>
  );
};

export default SinglePostPage;
