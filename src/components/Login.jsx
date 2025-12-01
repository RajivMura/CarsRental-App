import React from 'react'

const Login = ({ setShowLogin }) => {

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const onSubmitHandler = async (event) => {
        event.preventDefault();
    }

    return (
        <div onClick={() =>setShowLogin(false)} className="fixed top-10 bottom-0  left-0 right-0 z-100 flex flex-col items-center  text-gray-500 text-sm  bg-black/10">
            
            <div className='bg-white borde border-borderColor rounded-2xl w-96 p-6 mt-10' onClick={(e) => e.stopPropagation()}>
                <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2>
                <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation}>
                    <input onChange={(e) => setEmail(e.target.value)} id="email" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                    <input onChange={(e) => setPassword(e.target.value)} id="password" class="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
                    <div class="text-right py-4">
                        <a class="text-blue-600 underline" href="#">Forgot Password</a>
                    </div>
                    <button type="submit" class="w-85 mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button>
                </form>
                <p class="text-center mt-4">Don’t have an account? <a href="#" class="text-blue-500 underline">Signup</a></p>
                <button type="button" class="w-85 flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
                    <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo" />
                    Log in with Apple
                </button>
                <button type="button" class="w-85 flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                    <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                    Log in with Apple
                </button>
            </div>
        </div>
    )
}

export default Login
