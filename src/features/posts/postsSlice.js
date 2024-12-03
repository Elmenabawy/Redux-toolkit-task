import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addPost, deletePost, updatePost } from "../../network/postsApis";
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    })
    .addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    })
  },
});
export { fetchPosts, addPost, deletePost, updatePost }; 
export default postsSlice.reducer;