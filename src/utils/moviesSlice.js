import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addpopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addMovieTrailer, addpopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;