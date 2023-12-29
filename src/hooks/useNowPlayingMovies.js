import { useDispatch, useSelector } from "react-redux";
import { NOW_PLAYING_MOVIES, OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES, OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
};

export default useNowPlayingMovies;