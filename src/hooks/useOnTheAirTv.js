import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ON_THE_AIR_TV, OPTIONS } from "../utils/constant";
import { addOnTheAirTv } from "../utils/tvSlice";

const useOnTheAirTv = () => {
    const dispatch = useDispatch();

    const getOnTheAirTv = async () => {
        const data = await fetch(ON_THE_AIR_TV, OPTIONS);
        const json = await data.json();
        dispatch(addOnTheAirTv(json.results));
    };

    useEffect(() => {
        getOnTheAirTv();
    }, [])
};

export default useOnTheAirTv;