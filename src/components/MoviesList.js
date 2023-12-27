import MovieCard from "./MovieCard"

const MoviesList = ({ title, movies }) => {
    return (
        <div className="py-3 ">
            <h1 className="text-white text-xl">{title}</h1>
            <div className="flex overflow-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent">
                <div className="flex py-2 ">
                    {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.original_title} />)}
                </div>
            </div>
        </div>
    )
}

export default MoviesList