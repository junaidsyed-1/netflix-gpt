import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./moviesSlice"

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieReducer,
    }
});

export default appStore;