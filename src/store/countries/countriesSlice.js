import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
name: 'countries',
initialState: {
    isLoading: true,
    countries: [],
    countrySelected: [],
    error: null,
},
reducers: {
    getCountries: (state, {payload}) => {
        state.isLoading = false;
        state.countries = payload;
    },
    getCoutryByRegion: (state, {payload}) => {
        state.isLoading = true;
        state.countries = payload;
    },
    getCoutrySearched: (state, {payload}) => {
        state.isLoading = true;
        state.countries = payload;
    },
    getCountrySelected: (state, {payload}) => {
        state.isLoading = true;
        state.countrySelected = payload;
    },
    endLoading: (state) => {
        state.isLoading = false;
    },
    getError: (state, {payload}) => {
        state.error = payload;
    },
},
});
export const { getCountries, endLoading,  getError, getCoutryByRegion, getCoutrySearched, getCountrySelected } = countriesSlice.actions;