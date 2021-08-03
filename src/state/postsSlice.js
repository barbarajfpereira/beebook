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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPosts, setLoading, setError } = postsSlice.actions;

export default postsSlice.reducer;
