import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const API_KEY = 'AIzaSyDQCQegqjBTP_DgwIGjOKgZvLh7qaKu-N8';

export const metroApi = createApi({
  reducerPath: 'metroApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getStations: builder.query({
      query: location =>
        `/nearbysearch/json?key=${API_KEY}&location=${location.lat},${location.long}&radius=5000&type=subway_station`,
    }),
    getDistance: builder.query({
      query: location =>
        `/distancematrix/json?origins=${location.origin.lat},${location.origin.long}&destinations=${location.dest.lat},${location.dest.long}&key=${API_KEY}
        `,
    }),
  }),
});

export const {useGetStationsQuery, useGetDistanceQuery} = metroApi;
export default metroApi;
