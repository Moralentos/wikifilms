import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '0a0ca537-d80e-4b20-b65e-08a5c1baeb19';

export const getMoviesMainPage = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1`,
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data;

    dispatch(mainPageSlice.actions.receiveMovies(data));
  } catch (error) {
    dispatch(mainPageSlice.actions.receiveError(error));
  }
};

const initialState = {
  mainMovies: [],
  mainMoviesPage: 1,
  error: null,
};

export const mainPageSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    receiveMovies: (state, action) => {
      state.mainMovies = action.payload;
      state.error = null;
    },
    receiveError: (state, action) => {
      state.mainMovies = [];
      state.error = action.payload;
    },
    setMainMoviesPage: (state, action) => {
      state.mainMoviesPage = +action.payload;
    },
  },
});

export const { setMainMoviesPage } = mainPageSlice.actions;

export default mainPageSlice.reducer;
