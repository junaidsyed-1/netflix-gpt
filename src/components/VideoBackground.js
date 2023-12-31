import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const movieTrailer = useSelector(store => store.movie?.movieTrailer);
    useMovieTrailer(movieId)

    if (!movieTrailer) return;

    return (
        <div className="box-border overflow-hidden">
            <iframe
                className="w-screen aspect-video "
                src={"https://www.youtube.com/embed/" + movieTrailer.key + "?&autoplay=1&loop=1&controls=0&mute=1&playlist=" + movieTrailer.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground
