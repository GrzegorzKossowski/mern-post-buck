import { apiSlice } from './apiSlice';
import { AUTH_URL, USERS_URL } from '../../config/constants';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: `${AUTH_URL}/register`,
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: data => ({
                url: `${AUTH_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `${AUTH_URL}/logout`,
                method: 'POST',
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
    userApiSlice;
