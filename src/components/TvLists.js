import TvCard from "./TvCard"

const TvLists = ({ title, tvList }) => {
    return (
        <div className="py-3">
            <h1 className="text-white text-xl">{title}</h1>
            <div className="flex overflow-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent">
                <div className="flex py-2 ">
                    {tvList?.map(tv => <TvCard key={tv.id} posterPath={tv.poster_path} title={tv.original_title} />)}
                </div>
            </div>
        </div>
    )
}

export default TvLists