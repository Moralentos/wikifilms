import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '0a0ca537-d80e-4b20-b65e-08a5c1baeb19';

export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1',
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data;

    dispatch(moviesPageSlice.actions.receiveMovies(data));
  } catch (error) {
    dispatch(moviesPageSlice.actions.receiveError(error));
  }
};

const initialState = {
  movies: [],
  error: null,
};

export const moviesPageSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    receiveMovies: (state, action) => {
      state.movies = action.payload;
      state.error = null;
    },
    receiveError: (state, action) => {
      state.movies = [];
      state.error = action.payload;
    },
  },
});

export default moviesPageSlice.reducer;
