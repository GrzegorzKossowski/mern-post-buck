import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '../../config/constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Post'],
    endpoints: builder => ({}),
});
