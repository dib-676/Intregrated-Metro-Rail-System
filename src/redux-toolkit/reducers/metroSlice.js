import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  city: 'Delhi Metro',
  source: '',
  destination: '',
  flm_source: '',
  flm_destination: '',
  source_stCode: '',
  destination_stCode: '',
  flm_source_stCode: '',
  flm_destination_stCode: '',
  stationName: '',
  station_stCode: '',
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
      state.source = actions.payload.station_name;
      state.source_stCode = actions.payload.station_code;
    },
    setDestination: (state, actions) => {
      state.destination = actions.payload.station_name;
      state.destination_stCode = actions.payload.station_code;
    },
    setFLMSource: (state, actions) => {
      state.flm_source = actions.payload.station_name;
      state.flm_source_stCode = actions.payload.station_code;
    },
    setFLMDestination: (state, actions) => {
      state.flm_destination = actions.payload.station_name;
      state.flm_destination_stCode = actions.payload.station_code;
    },
    setStationName: (state, actions) => {
      state.stationName = actions.payload.station_name;
      state.station_stCode = actions.payload.station_code;
    },
    setLocation: (state, actions) => {
      state.location = {...state.location, ...actions.payload};
    },
    setStationData: (state, actions) => {
      state.stationData = actions.payload;
    },
    setReset: state => {
      state.city = 'Delhi Metro';
      state.source = '';
      state.destination = '';
    },
    setStationDetail: (state, actions) => {
      state.stationDetail = actions.payload;
    },
    setSwipeStation: (state, actions) => {
      if (actions.payload.type == 'firstLast') {
        let temp = state.flm_source;
        state.flm_source = state.flm_destination;
        state.flm_destination = temp;

        temp = state.flm_source_stCode;
        state.flm_source_stCode = state.flm_destination_stCode;
        state.flm_destination_stCode = temp;
      } else {
        let temp = state.source;
        state.source = state.destination;
        state.destination = temp;

        temp = state.source_stCode;
        state.source_stCode = state.destination_stCode;
        state.destination_stCode = temp;
      }
    },
  },
});
export const {
  setCity,
  setSource,
  setDestination,
  setFLMSource,
  setFLMDestination,
  setStationName,
  setLocation,
  setStationData,
  setReset,
  setSwipeStation,
  setStationDetail,
} = metroSlice.actions;
export default metroSlice.reducer;
