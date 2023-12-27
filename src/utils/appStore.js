import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./moviesSlice";
import tvReducer from "./tvSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieReducer,
        tv: tvReducer,
    }
});

export default appStore;