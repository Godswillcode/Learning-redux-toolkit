import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "./SinglePostSlice";
// import {}

const SinglePostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

// #!/bin/sh

// git filter-branch --env-filter '

// OLD_EMAIL="omenukooyekachi690@gmail.com "
// CORRECT_NAME="Godswillcode"
// CORRECT_EMAIL="omenukoonyekachi690@gmail.com"

// if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
// then
// export GIT_COMMITTER_NAME="$CORRECT_NAME"
// export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
// fi
// if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
// then
// export GIT_AUTHOR_NAME="$CORRECT_NAME"
// export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
// fi
// ' --tag-name-filter cat -- --branches --tags

export default SinglePostPage;
