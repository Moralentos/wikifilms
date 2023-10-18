import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '0a0ca537-d80e-4b20-b65e-08a5c1baeb19';

export const getSingleData = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });

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
  singleDirector: [],
  singleActor: [],
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
      state.singleDirector = action.payload.filter((item) => item.professionKey === 'DIRECTOR');
      state.singleActor = action.payload.filter((item) => item.professionKey === 'ACTOR');
      state.error = null;
    },
    receiveStaffError: (state, action) => {
      // state.staffError = [];
      state.error = action.payload;
    },
  },
});

export default singlePageSlice.reducer;
