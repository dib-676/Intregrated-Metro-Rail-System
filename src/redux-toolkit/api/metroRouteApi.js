import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://us-central1-delhimetroapi.cloudfunctions.net/';


export const metroRouteApi = createApi({
  reducerPath: 'metroRouteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getRoutePath: builder.query({
      query: location =>
        `route-get?from=${location.source}&to=${location.destination}`,
    }),
  }),
});
export const {useGetRoutePathQuery} = metroRouteApi;
export default metroRouteApi;
