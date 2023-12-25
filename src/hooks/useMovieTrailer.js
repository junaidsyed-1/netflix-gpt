import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieTrailer = async () => {
        const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
        const data = await fetch(URL, OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        const filteredData = json.results.filter(movie => movie.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(trailer);
        dispatch(addMovieTrailer(trailer))
    };

    useEffect(() => {
        getMovieTrailer();
    }, []);
};

export default useMovieTrailer;
