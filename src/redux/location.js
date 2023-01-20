import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getData from './getAllData';

const initialState = {
  loading: false,
  locationList: [],
  error: '',
};

export const getLocation = createAsyncThunk('locations/getLocation', async () => {
  const locations = await getData();
  return locations;
});

const locationSlice = createSlice({
  name: 'locations',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getLocation.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.locationList = [];
      state.error = '';
    });

    builder.addCase(getLocation.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.locationList = action.payload;
      state.error = '';
    });

    builder.addCase(getLocation.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.locationList = [];
      state.error = action.error.message;
    });
  },
});

export default locationSlice.reducer;
