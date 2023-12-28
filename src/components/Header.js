import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/languageConstants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)


    const handleSignOut = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                console.log(error);
            });
    };

    // onAuthStateChange(handles the state)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();
    }, []);

    const handleToggleSearch = () => {
        dispatch(toggleGptSearch())
    };

    const handleLanguage = (e) => {
        dispatch(changeLang(e.target.value))
    }


    return (
        <div className="absolute flex bg-gradient-to-b from-black w-full z-10 justify-between items-center top-0">
            <div className="m-3">
                <img
                    className="w-36"
                    src={LOGO} alt="Logo" />
            </div>
            {
                user &&
                <>
                    <div className="m-3">
                        {showGptSearch && <select onChange={handleLanguage} className="mx-3 bg-gray-900 text-white px-4 py-2 rounded-md ">
                            {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>}
                        <button onClick={handleToggleSearch} className="bg-blue-600 text-white p-2 rounded-md text-md px-3 hover:bg-blue-500 ">{showGptSearch ? "Home" : "GPT Search"}</button>
                        <button onClick={handleSignOut} className="bg-red-600 text-white p-2 rounded-md text-md px-3 hover:bg-red-500 mx-4">Sign Out</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Header