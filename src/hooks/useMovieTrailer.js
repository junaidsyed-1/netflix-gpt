import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movie.movieTrailer)


    const getMovieTrailer = async () => {
        const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
        const data = await fetch(URL, OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter(movie => movie.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer))
    };

    useEffect(() => {
        !movieTrailer && getMovieTrailer();
    }, []);
};

export default useMovieTrailer;
