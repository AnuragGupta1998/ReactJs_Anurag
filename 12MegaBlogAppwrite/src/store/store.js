import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';

const store = configureStore({
    reducer: {

        auth: authSlice,
        
        // TODO : add more slices for Posts
    }
});

export default store;