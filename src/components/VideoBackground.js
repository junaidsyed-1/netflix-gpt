import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const movieTrailer = useSelector(store => store.movie?.movieTrailer);
    useMovieTrailer(movieId)

    if (!movieTrailer) return;

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + movieTrailer.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground
