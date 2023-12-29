import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ON_THE_AIR_TV, OPTIONS } from "../utils/constant";
import { addOnTheAirTv } from "../utils/tvSlice";

const useOnTheAirTv = () => {
    const dispatch = useDispatch();
    const onTheAirTv = useSelector(store => store.tv.onTheAirTv);


    const getOnTheAirTv = async () => {
        const data = await fetch(ON_THE_AIR_TV, OPTIONS);
        const json = await data.json();
        dispatch(addOnTheAirTv(json.results));
    };

    useEffect(() => {
        !onTheAirTv && getOnTheAirTv();
    }, [])
};

export default useOnTheAirTv;