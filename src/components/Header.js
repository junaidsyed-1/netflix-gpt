import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)

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

    return (
        <div className="absolute flex bg-gradient-to-b from-black w-full z-10 justify-between items-center top-0">
            <div className="m-3">
                <img
                    className="w-36"
                    src={LOGO} alt="Logo" />
            </div>
            {user && <div className="m-3">
                <button onClick={handleSignOut} className="bg-red-600 text-white p-2 rounded-md text-sm">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header