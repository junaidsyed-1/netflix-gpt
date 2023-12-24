import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG_IMG } from "../utils/constant";
import Header from "./Header";

const Login = () => {
    const dispatch = useDispatch();
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
                })
                .catch((error) => {
                    const errorMessage = "Invalid Credentials";
                    setErrorMessage(errorMessage);
                });
        };
    };

    const handleToggleSubmit = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <Header />
            </div>
            <div>
                <img
                    src={LOGIN_BG_IMG}
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