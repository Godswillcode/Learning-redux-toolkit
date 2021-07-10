import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/PostsSlice";
import singlePostReducer from "../features/SinglePostSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    singlePost: singlePostReducer,
  },
});
