import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import TvLists from "./TvLists";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie);
    const tvLists = useSelector(store => store.tv);

    return (
        <div className="md:pl-20 bg-black mt-[59%] md:mt-0 sm:mt-[36%]">
            <div className="-mt-64 relative z-20 ">
                <MoviesList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
                <TvLists title="Top Rated Tv Series" tvList={tvLists.topRatedTv} />
                <MoviesList title="Top Rated Movies" movies={movies.topRatedMovies} />
                <TvLists title="Popular Tv Series" tvList={tvLists.popularTv} />
                <MoviesList title="Upcoming Movies" movies={movies.upcomingMovies} />
                <TvLists title="On The Air Tv" tvList={tvLists.onTheAirTv} />
                <MoviesList title="Popular Movies" movies={movies.popularMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;