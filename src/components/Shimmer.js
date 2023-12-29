import loader from "../images/loader.gif"

const Shimmer = () => {
    return (
        <div className="container mx-auto ">
            <img className="w-12" src={loader} alt="loader" />
        </div>
    )
}

export default Shimmer;