import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ title, posterPath }) => {
    if (!posterPath) return null;
    return (

        <img
            className='w-44 rounded-md mr-4 cursor-pointer'
            alt={title}
            src={IMG_CDN_URL + posterPath}
        />

    )
}

export default MovieCard