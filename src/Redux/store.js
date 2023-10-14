import { configureStore } from '@reduxjs/toolkit';
import seriesSlice from './seriesPageSlice';
import singleSlice from './singlePageSlice';

export const store = configureStore({
  reducer: {
    seriesSlice: seriesSlice,
    singleSlice,
  },
});
