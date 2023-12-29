import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, UPCOMING_MOVIES } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES, OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, [])
};

export default useUpcomingMovies;