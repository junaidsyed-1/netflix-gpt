import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import gptReducer from "./gptSlice";
import langReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieReducer,
        tv: tvReducer,
        gpt: gptReducer,
        config: langReducer,
    }
});

export default appStore;