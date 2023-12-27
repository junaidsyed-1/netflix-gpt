import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, TOP_RATED_TV } from "../utils/constant";
import { addTopRatedTv } from "../utils/tvSlice";

const useTopRatedTv = () => {
    const dispatch = useDispatch();

    const getTopRatedTv = async () => {
        const data = await fetch(TOP_RATED_TV, OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedTv(json.results));
    };

    useEffect(() => {
        getTopRatedTv();
    }, [])
};

export default useTopRatedTv;