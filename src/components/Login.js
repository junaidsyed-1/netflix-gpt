
const Login = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="bg-gradient-to-b from-black absolute w-full p-5 z-10 top-0">
                <img
                    className="w-56"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            </div>
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg-img" />
            </div>
            <form
                onSubmit={(e) => { e.preventDefault() }}
                className="p-16 w-3/12 bg-black absolute text-white opacity-90">
                <h1 className="text-3xl font-bold mb-5 mt-2">Sign In</h1>
                <input type="text" placeholder="Email Address" className="py-3 px-4 my-3 rounded-lg w-full bg-[#8c8c8c] text-white" />
                <input type="password" placeholder="Password" className="py-3 px-4 my-3 rounded-lg w-full bg-[#8c8c8c] text-white" />
                <button className="bg-red-600 rounded-lg w-full py-2 my-2">Sign In</button>
                <p className="mt-7"><span className="text-[#8c8c8c]">New to NetFlix?</span> <a href="/" className="hover:underline"> Sign up now.</a></p>
            </form>
        </div>
    )
}

export default Login