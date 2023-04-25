import {configureStore} from '@reduxjs/toolkit';
import metroReducer from '../redux-toolkit/reducers/metroSlice';

export const store = configureStore({
  reducer: {
    metroReducer: metroReducer,
  },
});
