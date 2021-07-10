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

  let myContent;

  if (postStatus === "loading") {
    myContent = <div>Loading...</div>;
  } else if (postStatus === "success") {
    myContent = (
      <div>
        <h3>{singlePost?.title}</h3>
        <p>{singlePost?.body}</p>
      </div>
    );
  } else if (postStatus === "failed") {
    myContent = <div>Something went wrong</div>;
  }

  return (
    <div>
      <h2>hello</h2>
      {myContent}
    </div>
  );
};

export default SinglePostPage;
