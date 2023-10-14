import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'aa3b2968-fe7d-4ce8-8f24-57870b765ead';

export const getSingleData = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data;

    dispatch(singlePageSlice.actions.receiveSeries(data));
  } catch (error) {
    dispatch(singlePageSlice.actions.receiveError(error));
  }
};

export const getSingleStaff = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data;

    dispatch(singlePageSlice.actions.receiveStaff(data));
  } catch (error) {
    dispatch(singlePageSlice.actions.receiveStaffError(error));
  }
};

const initialState = {
  singleData: [],
  error: null,
  singleStaff: [],
  staffError: null,
};

export const singlePageSlice = createSlice({
  name: 'singleSlice',
  initialState,
  reducers: {
    receiveSeries: (state, action) => {
      state.singleData = action.payload;
      state.error = null;
    },
    receiveError: (state, action) => {
      state.singleData = [];
      state.error = action.payload;
    },
    receiveStaff: (state, action) => {
      state.singleStaff = action.payload;
      state.error = null;
    },
    receiveStaffError: (state, action) => {
      state.staffError = [];
      state.error = action.payload;
    },
  },
});

export default singlePageSlice.reducer;
