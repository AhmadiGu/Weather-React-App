import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getData from './getAllData';

const initialState = {
  loading: false,
  locationList: [],
  error: '',
  continent: 'All',
};

export const getLocation = createAsyncThunk('locations/getLocation', async () => {
  const locations = await getData();
  return locations;
});

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setContinent: (state, action) => {
      state.continent = action.payload;
    },
  },

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

const countriesSelector = (state) => {
  if (state.locations.continent === 'All') {
    return state.locations.locationList;
  }
  return state.locations.locationList.filter(
    (location) => location.region === state.locations.continent,
  );
};

export const { setContinent } = locationSlice.actions;
export const changeContinent = createAsyncThunk('locations/changeContinet', async (params, { dispatch }) => {
  dispatch(setContinent(params));
});

export { countriesSelector };

export default locationSlice.reducer;
