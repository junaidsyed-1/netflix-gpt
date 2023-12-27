import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieReducer,
        tv: tvReducer,
        gpt: gptReducer,
    }
});

export default appStore;