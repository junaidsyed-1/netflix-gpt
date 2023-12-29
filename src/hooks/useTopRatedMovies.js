import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, TOP_RATED_MOVIES } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATED_MOVIES, OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;