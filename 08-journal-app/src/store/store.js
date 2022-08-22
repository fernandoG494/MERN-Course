import { authSlice } from './auth';
import { journalSlice } from './journal';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
    },
});
