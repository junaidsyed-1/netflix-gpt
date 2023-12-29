import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, TOP_RATED_TV } from "../utils/constant";
import { addTopRatedTv } from "../utils/tvSlice";

const useTopRatedTv = () => {
    const dispatch = useDispatch();
    const topRatedTv = useSelector(store => store.tv.topRatedTv);


    const getTopRatedTv = async () => {
        const data = await fetch(TOP_RATED_TV, OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedTv(json.results));
    };

    useEffect(() => {
        !topRatedTv && getTopRatedTv();
    }, [])
};

export default useTopRatedTv;