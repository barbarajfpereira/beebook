import { createSlice } from '@reduxjs/toolkit';

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    value: [],
    loading: false,
    error: false,
  },
  reducers: {
    setPhotos: (state, action) => {
      state.value = action.payload;
    },

    updatePhotos: (state, action) => {
      const updatedPhotos = action.payload.map((photo) => ({
        ...photo,
        id: `UPDATED: ${photo.id}`,
      }));
      const nonUpdatedPhotos = state.value.filter(
        (photo) => photo.albumId !== updatedPhotos[0].albumId
      );
      state.value = [...nonUpdatedPhotos, ...updatedPhotos];
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPhotos, updatePhotos, setLoading, setError } =
  photosSlice.actions;

export default photosSlice.reducer;
