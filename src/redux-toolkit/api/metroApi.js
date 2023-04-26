import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://maps.googleapis.com/maps/api';
const API_KEY = 'AIzaSyDQCQegqjBTP_DgwIGjOKgZvLh7qaKu-N8';

export const metroApi = createApi({
  reducerPath: 'metroApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getStations: builder.query({
      query: location =>
        `/place/nearbysearch/json?key=${API_KEY}&location=${location.lat},${location.long}&radius=5000&type=subway_station`,
    }),
    getDistance: builder.query({
      query: location => (
        console.log('loc', location),
        console.log('location origin', location.origin),
        console.log('location destination', location.dest),
        {
          url: `/distancematrix/json?origins=${location.origin.lat},${location.origin.long}&destinations=${location.dest.lat},${location.dest.long}&key=${API_KEY}`,
          method: 'POST',
        }
      ),
    }),
  }),
});

export const {useGetStationsQuery, useGetDistanceQuery} = metroApi;
export default metroApi;
