
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-40 w-1/3 px-10">
            <h1 className="text-5xl font-bold ">{title}</h1>
            <p className="w-4/5 m-2 text-lg text-justify">{overview}</p>
            <div>
                <button className="bg-gray-500 p-4 px-12 text-xl text-white rounded-md m-2">Play</button>
                <button className="bg-gray-500 p-4 px-12 text-xl text-white rounded-md m-2">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
