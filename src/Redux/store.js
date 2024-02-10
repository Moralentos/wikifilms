import { configureStore } from '@reduxjs/toolkit';
import seriesSlice from './seriesPageSlice';
import singleSlice from './singlePageSlice';
import moviesSlice from './moviesPageSlice';
import mainSlice from './mainPageSlice';

export const store = configureStore({
  reducer: {
    seriesSlice,
    singleSlice,
    moviesSlice,
    mainSlice,
  },
});
