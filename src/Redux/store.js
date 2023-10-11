import { configureStore } from '@reduxjs/toolkit';
import seriesSlice from './seriesPageSlice';

export const store = configureStore({
  reducer: {
    seriesSlice: seriesSlice,
  },
});
