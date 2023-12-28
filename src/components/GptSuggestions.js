import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSuggestions = () => {

    const { movieNames, movieResult } = useSelector(store => store.gpt);
    if (!movieNames) return null;

    return (
        <div className="bg-blue-950 container p-4 text-white mx-auto my-4 rounded-md shadow-lg">
            {movieNames.map((movieName, index) => <MoviesList key={movieName} title={movieName} movies={movieResult[index]} />)}

        </div>
    )
}

export default GptSuggestions;