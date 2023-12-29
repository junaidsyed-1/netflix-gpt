import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_TV } from "../utils/constant";
import { addPopularTv } from "../utils/tvSlice";

const usePopularTv = () => {
    const dispatch = useDispatch();

    const getPopularTv = async () => {
        const data = await fetch(POPULAR_TV, OPTIONS);
        const json = await data.json();
        dispatch(addPopularTv(json.results));
    };

    useEffect(() => {
        getPopularTv();
    }, [])
};

export default usePopularTv;