
const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className="w-full aspect-video absolute bg-gradient-to-r from-black opacity-40 !overflow-hidden box-border"></div>
            <div className="w-[36%] px-20 text-white absolute flex flex-col top-0 bottom-1/3 justify-end z-10 overflow-hidden">
                <h1 className="text-5xl font-bold ">{title}</h1>
                <p className="w-4/5 my-2 pt-3 text-lg text-justify">{overview}</p>
                <div className="my-2 font-bold flex items-center">
                    <button className="bg-white p-4 px-12 text-xl text-black rounded-md  hover:bg-opacity-80 flex items-center">
                        <span><img className="w-7 h-7" src="https://img.icons8.com/?size=256&id=9978&format=png" alt="play" /></span> Play</button>
                    <button className="bg-[#656562] p-4 px-12 text-xl text-white rounded-md bg-opacity-70 mx-2 hover:bg-opacity-80 flex items-center">
                        <span><img className="w-7 h-7 mr-1" src="https://img.icons8.com/?size=256&id=77&format=png" alt="info" /></span> More Info</button>
                </div>
            </div >
        </>
    )
};

export default VideoTitle;
