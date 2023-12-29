import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, POPULAR_TV } from "../utils/constant";
import { addPopularTv } from "../utils/tvSlice";

const usePopularTv = () => {
    const dispatch = useDispatch();
    const popularTv = useSelector(store => store.tv.popularTv);


    const getPopularTv = async () => {
        const data = await fetch(POPULAR_TV, OPTIONS);
        const json = await data.json();
        dispatch(addPopularTv(json.results));
    };

    useEffect(() => {
        !popularTv && getPopularTv();
    }, [])
};

export default usePopularTv;