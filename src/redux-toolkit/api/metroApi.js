import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const metroApi = createApi({
  reducerPath: 'metroApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://maps.googleapis.com/maps/api/place' }),
  endpoints: (builder) => ({
    getStations: builder.query({
      query: (location) => `/nearbysearch/json?location=${location}&radius=5000&type=subway_station`,
    }),
  }),
})

export const { useGetStationsQuery } = metroApi
export default metroApi.reducer;
