import { AUTH_URL, USERS_URL } from '../constants';
import { UserLoginType, UserRegisterType, UserModelType } from '../../types';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
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
        // register: builder.mutation<
        //     UserType,
        //     { email: string; password: string; name: string }
        // >({
        //     query: data => ({
        //         url: `${USERS_URL}`,
        //         method: 'POST',
        //         body: data,
        //     }),
        // }),
        // profile: builder.mutation({
        //     query: data => ({
        //         url: `${USERS_URL}/profile`,
        //         method: 'PUT',
        //         body: data,
        //     }),
        // }),
        // getUsers: builder.query<UserType[], void>({
        //     query: () => ({
        //         url: USERS_URL,
        //     }),
        //     providesTags: ['User'],
        //     keepUnusedDataFor: 5,
        // }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    // useRegisterMutation,
    // useProfileMutation,
    // useGetUsersQuery,
} = usersApiSlice;
