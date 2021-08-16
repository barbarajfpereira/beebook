import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: [],
    loading: false,
    error: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    },
    updatePosts: (state, action) => {
      const updatedPosts = action.payload.map((post) => ({
        ...post,
        title: `(${new Date().getSeconds()}) UPDATED: ${post.title}`,
      }));

      const nonUpdatedPosts = state.value.filter(
        (post) => post.userId !== updatedPosts[0].userId
      );

      state.value = [...nonUpdatedPosts, ...updatedPosts];
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPosts, updatePosts, setLoading, setError } =
  postsSlice.actions;

export default postsSlice.reducer;
