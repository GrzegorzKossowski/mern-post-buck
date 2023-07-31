import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './slices/apiSlice';
// import cartSliceReducer from './slices/cartSlice';
// import authSliceReducer from './slices/authSlice';
const store = configureStore({
    reducer: {
        // [apiSlice.reducerPath]: apiSlice.reducer,
        // auth: authSliceReducer,
        // cart: cartSliceReducer,
    },
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
