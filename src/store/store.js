import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './countries/countriesSlice';

export const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})