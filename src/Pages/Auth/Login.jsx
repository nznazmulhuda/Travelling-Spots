import { Link } from "react-router-dom"
import {FaGoogle, FaGithub} from 'react-icons/fa6'
import { toast } from "react-toastify";

function Login() {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        console.log({email, pass});
    }

    const handleGoogle = () => {
        toast.success("Google Loged in");
    }

    const handleGithub = () => {
        toast.success('Github Loged in')
    }

  return (
    <>
    <div className="my-8 md:my-9 lg:my-10 container mx-auto flex flex-col items-center justify-center">
        <div className="w-full">
            <h1 className="text-center text-3xl font-bold mb-4">
                Log<span className="text-green-700">in</span>
            </h1>

            <form onSubmit={handleLogin} className="border rounded-lg py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-10 w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Email address" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" />
                </div>
                
                <div className="divider my-0 mb-3"></div>

                <div className="flex items-center w-full justify-between">
                    <button className="btn btn-ghost w-full text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                        Login
                    </button>
                </div>

                <div className="divider my-3">Login with social account</div>

                <div className="flex items-center w-full justify-center gap-5">
                    <button onClick={handleGoogle}>
                        <FaGoogle className="text-xl md:text-2xl lg:text-3xl" />
                    </button>

                    <button onClick={handleGithub}>
                        <FaGithub className="text-xl md:text-2xl lg:text-3xl" />
                    </button>
                </div>

                <div className="divider">Do not have an account?</div>

                <div className="flex items-center w-full justify-between">
                    <Link to={"/register"} className="btn btn-ghost w-full text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login