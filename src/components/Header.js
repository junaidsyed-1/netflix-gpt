import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="flex bg-gradient-to-b from-black w-full p-5 z-10 justify-between items-center">
            <div>
                <img
                    className="w-36"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            </div>
            <div>
                <button onClick={handleSignOut} className="bg-red-600 text-white p-2 rounded-md text-sm">Sign Out</button>
            </div>
        </div>
    )
}

export default Header