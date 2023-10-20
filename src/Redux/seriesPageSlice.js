import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '0a0ca537-d80e-4b20-b65e-08a5c1baeb19';

export const getSeries = (page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=${page}`,
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data;

    dispatch(seriesPageSlice.actions.receiveSeries(data));
  } catch (error) {
    dispatch(seriesPageSlice.actions.receiveError(error));
  }
};

const initialState = {
  series: [],
  isCount: 1,
  error: null,
};

export const seriesPageSlice = createSlice({
  name: 'seriesSlice',
  initialState,
  reducers: {
    receiveSeries: (state, action) => {
      state.series = action.payload;
      state.error = null;
    },
    receiveError: (state, action) => {
      state.series = [];
      state.error = action.payload;
    },
    setCount: (state, action) => {
      state.isCount = +action.payload;
    },
  },
});

export const { setCount } = seriesPageSlice.actions;

export default seriesPageSlice.reducer;
