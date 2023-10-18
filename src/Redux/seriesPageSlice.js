import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '0a0ca537-d80e-4b20-b65e-08a5c1baeb19';

export const getSeries = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
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
  },
});

export default seriesPageSlice.reducer;
