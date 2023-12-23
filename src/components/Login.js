import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // Sign up/ Sign In Logic.
        if (!isSignInForm) {
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                        navigate("/browse");
                    }).catch((error) => {
                        console.log(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        };
    };

    const handleToggleSubmit = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="bg-gradient-to-b from-black absolute w-full p-5 z-10 top-0">
                <img
                    className="w-56"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            </div>
            <div>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg-img" />
            </div>
            <form
                onSubmit={(e) => { e.preventDefault() }}
                className="p-16 w-3/12 bg-black absolute text-white opacity-95 rounded-md">
                <h1 className="text-3xl font-bold mb-5 mt-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="py-3 px-4 my-3 rounded-lg w-full bg-[#8c8c8c] text-white" />}
                <input
                    ref={email}
                    type="email" placeholder="Email Address" className="py-3 px-4 my-3 rounded-lg w-full bg-[#8c8c8c] text-white" />
                <input
                    ref={password}
                    type="password" placeholder="Password" className="py-3 px-4 my-3 rounded-lg w-full bg-[#8c8c8c] text-white" />
                <p className="text-red-700 font-bold">{errorMessage}</p>
                <button
                    onClick={handleClick}
                    className="bg-red-600 rounded-lg w-full py-2 my-2">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="mt-7"><span className="text-[#8c8c8c]">{isSignInForm ? "New to NetFlix?" : "Already a user?"}</span> <span onClick={handleToggleSubmit} className="hover:underline cursor-pointer"> {isSignInForm ? "Sign up Now." : "Sign In"} </span></p>
            </form>
        </div>
    )
}

export default Login