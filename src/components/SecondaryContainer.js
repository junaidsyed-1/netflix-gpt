import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie);

    return (
        <div className="pl-20 bg-black">
            <div className="-mt-64 relative z-20">
                <MoviesList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
                <MoviesList title="Top Rated Movies" movies={movies.topRatedMovies} />
                <MoviesList title="Upcoming Movies" movies={movies.upcomingMovies} />
                <MoviesList title="Popular Movies" movies={movies.popularMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;