import {configureStore} from '@reduxjs/toolkit';
import metroReducer from '../redux-toolkit/reducers/metroSlice';
import metroApiReducer from '../redux-toolkit/api/metroApi';

export const store = configureStore({
  reducer: {
    metroReducer: metroReducer,
    metroApiReducer: metroApiReducer,
  },
});
