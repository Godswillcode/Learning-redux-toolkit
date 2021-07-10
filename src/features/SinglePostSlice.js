import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSinglePost = createAsyncThunk(
  "singlePost/getSinglePost",
  async (postId) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    ).then((res) => res.json());
  }
);

const SinglePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    list: { userId: null, id: null, title: "", body: "" },
    status: null,
  },
  extraReducers: {
    [getSinglePost.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getSinglePost.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default SinglePostSlice.reducer;
