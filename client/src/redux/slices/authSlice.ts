import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserAuthType } from '../../types';

const storage = localStorage.getItem('userInfo');
const initialState = {
    userInfo: storage ? JSON.parse(storage) : null,
};

// https://stackoverflow.com/a/74491857
// create selector functions

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<UserAuthType>) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            // const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1h
            // localStorage.setItem('expirationTime', expirationTime.toString());
        },
        removeCredentials: state => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
            // localStorage.removeItem('expirationTime');
        },
    },
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;
