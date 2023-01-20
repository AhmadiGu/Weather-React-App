import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getDetalis from './getDetails';

const initialState = {
  loading: false,
  detailsList: [],
  error: '',
};

export const detailsLocation = createAsyncThunk('details/getDetalis', async (params) => {
  const data = await getDetalis(params.lat, params.lon);
  return data;
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(detailsLocation.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.detailsList = [];
      state.error = '';
    });

    builder.addCase(detailsLocation.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.detailsList = action.payload;
      state.error = '';
    });

    builder.addCase(detailsLocation.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.detailsList = [];
      state.error = action.error.message;
    });
  },

});

export default detailsSlice.reducer;
