import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "myPost/getPosts",
  async ({ limit }) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((res) => res.json());
  }
);

const PostsSlice = createSlice({
  name: "myPost",
  initialState: {
    posts: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default PostsSlice.reducer;
