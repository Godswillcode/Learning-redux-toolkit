import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../features/PostsSlice";

const PostList = () => {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.posts);
  const postStatus = useSelector((state) => state.posts.status);
  //   console.log(postStatus);

  useEffect(() => {
    dispatch(getPosts({ limit: 3 }));
  }, [dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (postStatus === "success") {
    content = (
      <div>
        {post.list.map((item) => {
          return (
            <div key={item.id}>
               <div style={{border: "1px solid red", display: "inline-block", padding: 5, margin: "10px 0"}}>
               <h4>{item.title}</h4>
             <Link to={`/posts/${item.id}`}><button>View post</button></Link>
               </div>
            </div>
          );
        })}
      </div>
    );
  } else if (postStatus === "failed") {
    content = <div>Something went wrong</div>;
  }

  return (
    <div>
      <h2>All post</h2>
      <hr />
      {content}
      <hr />
      <h2>Our way</h2>
    </div>
  );
};

export default PostList;
