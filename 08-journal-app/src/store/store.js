import { authSlice } from './auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { journalSlice } from './journal/journalSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
    },
});
