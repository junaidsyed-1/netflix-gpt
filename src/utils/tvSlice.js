import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: 'tv',
    initialState: {
        topRatedTv: null,
        popularTv: null,
        onTheAirTv: null,
    },
    reducers: {
        addTopRatedTv: (state, action) => {
            state.topRatedTv = action.payload;
        },
        addPopularTv: (state, action) => {
            state.popularTv = action.payload;
        },
        addOnTheAirTv: (state, action) => {
            state.onTheAirTv = action.payload;
        }
    }
});

export const { addTopRatedTv, addPopularTv, addOnTheAirTv } = tvSlice.actions;
export default tvSlice.reducer;