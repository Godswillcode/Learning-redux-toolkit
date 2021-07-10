import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSinglePost = createAsyncThunk("posts/getPosts", async (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json());
});

const SinglePostsSlice = createSlice({
  name: "singlePosts",
  initialState: {
    list: {id: null, title: ""},
    status: null,
  },
  extraReducers: {
      [getSinglePost.pending]: (state, action) => {
          state.status = "loading"
      },
      [getSinglePost.fulfilled]: (state, {payload}) => {
        console.log("payload is",payload);
          state.list = payload
        state.status = "success"
    },
    [getSinglePost.rejected]: (state, action) => {
        state.status = "failed"
    },
  },
});

export default SinglePostsSlice.reducer 
