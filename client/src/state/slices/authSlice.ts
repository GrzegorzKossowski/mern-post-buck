import { createSlice } from '@reduxjs/toolkit';

const storage = localStorage.getItem('userInfo');
const initialState = {
    userInfo: storage ? JSON.parse(storage) : null,
    mode: 'light',
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));

            const expirationTime =
                new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days
            localStorage.setItem('expirationTime', expirationTime.toString());
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
            localStorage.removeItem('expirationTime');
        },
        setMode: (state, action) => {
            state.mode = state.mode === 'light' ? 'dark' : 'ligth';
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
