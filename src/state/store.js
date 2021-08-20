import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import photosReducer from './photosSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    photos: photosReducer,
  },
});
