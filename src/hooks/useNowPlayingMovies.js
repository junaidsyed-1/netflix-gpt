import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIES, OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES, OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
};

export default useNowPlayingMovies;