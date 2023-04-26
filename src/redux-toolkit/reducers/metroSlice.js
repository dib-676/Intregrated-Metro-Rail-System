import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  city: 'Delhi Metro',
  source: '',
  destination: '',
  stationName: '',
  stationData: [],
  location: {},
};
export const metroSlice = createSlice({
  name: 'startScreen',
  initialState,
  reducers: {
    setCity: (state, actions) => {
      state.city = actions.payload;
    },
    setSource: (state, actions) => {
      state.source = actions.payload;
    },
    setDestination: (state, actions) => {
      state.destination = actions.payload;
    },
    setStationName: (state, actions) => {
      state.stationName = actions.payload;
    },
    setLocation: (state, actions) => {
      state.location = {...state.location, ...actions.payload};
    },
    setStationData: (state, actions) => {
      state.stationData = actions.payload;
    },
  },
});
export const {
  setCity,
  setSource,
  setDestination,
  setStationName,
  setLocation,
  setStationData,
} = metroSlice.actions;
export default metroSlice.reducer;
