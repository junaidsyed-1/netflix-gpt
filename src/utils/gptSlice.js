import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResult: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSearchResult: (state, action) => {
            const { movieNames, movieResult } = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        }
    }
});

export const { toggleGptSearch, addGptSearchResult } = gptSlice.actions;
export default gptSlice.reducer;