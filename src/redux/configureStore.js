import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location';
import detailsReducer from './details';

const store = configureStore({
  reducer: {
    locations: locationReducer,
    details: detailsReducer,
  },
});

export default store;
