import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addpopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES, OPTIONS);
        const json = await data.json();
        dispatch(addpopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, [])
};

export default usePopularMovies;