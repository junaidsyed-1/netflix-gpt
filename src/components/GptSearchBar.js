import { useSelector } from "react-redux"
import { LOGIN_BG_IMG } from "../utils/constant"
import lang from "../utils/languageConstants"

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)

    return (
        <>
            <div className="absolute -z-20 top-0"><img src={LOGIN_BG_IMG} alt="img" /></div>

            <form className="bg-black lg:w-1/2 grid grid-flow-col grid-col-12 mx-auto mt-[20%] lg:mt-[7%] p-4">
                <input type="text" placeholder={lang[langKey].gptPlaceHolder} className="col-span-10 p-4 rounded-md" />
                <button className="bg-red-600 p-2 rounded-md mx-2 text-white hover:bg-red-500">{lang[langKey].search}</button>
            </form>
        </>
    )
}

export default GptSearchBar