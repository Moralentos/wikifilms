import { configureStore } from '@reduxjs/toolkit';
import seriesSlice from './seriesPageSlice';
import singleSlice from './singlePageSlice';
import moviesSlice from './moviesPageSlice';

export const store = configureStore({
  reducer: {
    seriesSlice: seriesSlice,
    singleSlice,
    moviesSlice,
  },
});
