import {configureStore} from '@reduxjs/toolkit';
import metroReducer from '../redux-toolkit/reducers/metroSlice';
import metroApi from '../redux-toolkit/api/metroApi';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    metroReducer: metroReducer,
    [metroApi.reducerPath]: metroApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware([]).concat([logger, metroApi.middleware]),
});
