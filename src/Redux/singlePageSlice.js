import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'aa3b2968-fe7d-4ce8-8f24-57870b765ead';

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

export const fetchImage = createAsyncThunk(`image/fetchImages`, async (id) => {
  const response = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`,
    {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data.items;
});

const initialState = {
  singleData: [],
  error: null,
  singleDirector: [],
  singleActor: [],
  staffError: null,
  singleImage: [],
  statusImage: 'loading',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchImage.pending, (state) => {
        console.log('Загрузка картинок');
        state.statusImage = 'loading';
        state.singleImage = [];
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        console.log('Картинки получены');
        state.statusImage = 'success';
        state.singleImage = action.payload;
      })
      .addCase(fetchImage.rejected, (state) => {
        console.log('Ошибка картинок');
        state.statusImage = 'error';
      });
  },
});

export default singlePageSlice.reducer;
