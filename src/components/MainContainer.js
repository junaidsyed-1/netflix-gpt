import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    if (!movies) return;

    console.log(movies[0])
    const { original_title, overview, id } = movies[0];

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;