import { useDispatch, useSelector } from "react-redux";
import { LOGIN_BG_IMG, OPTIONS } from "../utils/constant";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { addGptSearchResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch()

    const gptSearchVal = useRef(null);
    const langKey = useSelector(store => store.config.lang);

    const searchResultTMDB = async (query) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + query, OPTIONS);
        const json = await data.json();
        return json.results

    }

    const handleGptSearch = async () => {
        console.log(gptSearchVal.current.value);

        const gptQuery = "Act as a movie or tv recommendation system, with the give query, query :" + gptSearchVal.current.value + ". Only recommend 5 movies and the result should be separated by commas like the example given ahead. Example : Don, The Withcer, Jawan, Dangal, Pathan. Please don't include any text other than the name of movies";

        const gptsearch = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        const gptResult = gptsearch.choices?.[0]?.message.content.split(",")

        // For each movie i will search TMDB API
        const tmdbData = gptResult.map(query => searchResultTMDB(query));
        const tmdbResult = await Promise.all(tmdbData)
        dispatch(addGptSearchResult({ movieNames: gptResult, movieResult: tmdbResult }));
    }

    return (
        <>
            <div className="absolute -z-10 top-0"><img src={LOGIN_BG_IMG} alt="img" /></div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-black lg:w-1/2 grid grid-flow-col grid-col-12 mx-auto mt-[20%] lg:mt-[7%] p-4">
                <input ref={gptSearchVal} type="text" placeholder={lang[langKey].gptPlaceHolder} className="col-span-10 p-4 rounded-md" />
                <button onClick={handleGptSearch} className="bg-red-600 p-2 rounded-md mx-2 text-white hover:bg-red-500">{lang[langKey].search}</button>
            </form>
        </>
    )
}

export default GptSearchBar