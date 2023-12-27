import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedTv from "../hooks/useTopRatedTv";
import usePopularTv from "../hooks/usePopularTv";
import useOnTheAirTv from "../hooks/useOnTheAirTv";


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTopRatedTv();
    usePopularTv();
    useOnTheAirTv();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
