import { Link, useLocation, useNavigate } from "react-router-dom"
import {FaGoogle, FaGithub} from 'react-icons/fa6'
import {FaRegCircle,FaRegCheckCircle} from 'react-icons/fa'
import { useContext, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { toast } from "react-toastify"
import { updateProfile } from "firebase/auth"
import { auth } from "../../Firebase/Firebase.config"

function Register() {
    
    const {state} = useLocation()
    const navigate = useNavigate()

    const [validatePass, setValidatePass] = useState('')
    const {createUser, googleLogin, githubLogin, loading} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.photoUrl.value;
        if(validatePass.length < 6) {
            toast.error('Password must be 6 character!');
            form.password.value = "";
            setValidatePass("")
            return;
        } else if(!/[A-Z]/.test(validatePass)) {
            toast.error('Password must have an Uppercase!');
            form.password.value = "";
            setValidatePass("")
            return;
        } else if(!/[a-z]/.test(validatePass)) {
            toast.error('Password must have an Lowercase');
            form.password.value = "";
            setValidatePass("")
            return;
        } else {
            const pass = validatePass;
            createUser(email,pass)
                .then(res=>{
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: url
                    });
                    toast.success("Login Success");
                    navigate(state ? state : "/");
                    console.log(res);
                })
                .catch(e=>{
                    toast.error(e.message)
                })
            form.reset();
        }
    }

    const handleGoogle = () => {
        googleLogin()
            .then(res=> {
                toast.success("Google Login Success!");
                navigate(state ? state : "/")
            })
            .catch(e=>{
                toast.error(e.message)
            })
    }

    const handleGithub = () => {
        githubLogin()
            .then(res=> {
                toast.success("Github Login Success!");
                navigate(state ? state : "/")
            })
            .catch(e=> {
                toast.error(e.message)
            })
    }


  return (
    <div className="border-y-2 border-green-600 mt-10 rounded-3xl">
    <div className="container mx-auto flex flex-col items-center py-10 justify-center">
        <div className="w-full">
            <h1 className="text-center text-3xl font-bold mb-5 -mt-5">
                <span className="text-green-700">Reg</span>ister
            </h1>

            {
                loading && <div className="flex items-center justify-center my-8 md:my-9 lg:my-10"><span className="loading loading-spinner loading-lg"></span></div>
            }

            <form onSubmit={handleLogin} className={`${loading && "hidden"} border rounded-lg py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-10 w-[90%] md:w-[70%] lg:w-[60%] mx-auto`}>
            <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Full Name" />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Email address" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        Photho URL
                    </label>
                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="photoUrl" type="url" placeholder="Photo Url" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" onChange={(e)=>setValidatePass(e.target.value)} />
                </div>

                <div>
                    <h1 className="flex gap-2 items-center text-[14px]">{validatePass.length >= 6 ? <FaRegCheckCircle className="text-green-500" /> : <FaRegCircle className="text-red-500" />} must 6 character</h1>
                    <h1 className="flex gap-2 items-center text-[14px]">{/[A-Z]/.test(validatePass) ? <FaRegCheckCircle className="text-green-500" /> : <FaRegCircle className="text-red-500" />} must have uppercase</h1>
                    <h1 className="flex gap-2 items-center text-[14px]">{/[a-z]/.test(validatePass) ? <FaRegCheckCircle className="text-green-500" /> : <FaRegCircle className="text-red-500" />}must have lowercase</h1>
                </div>
                
                <div className="divider my-0 mb-3"></div>

                <div className="flex items-center w-full justify-between">
                    <button type="submit" className="btn btn-ghost w-full text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                        Register
                    </button>
                </div>
            </form>


            <div className="px-5 md:px-8 lg:px-10 ">   
                <div className="divider w-[90%] md:w-[70%] lg:w-[60%] mx-auto my-3">Register with social account</div>

                <div className="flex items-center w-full justify-center gap-5">
                    <button type="button" onClick={handleGoogle}>
                        <FaGoogle className="text-xl md:text-2xl lg:text-3xl" />
                    </button>

                    <button type="button" onClick={()=>handleGithub()}>
                        <FaGithub className="text-xl md:text-2xl lg:text-3xl" />
                    </button>
                </div>

                <div className="divider w-[90%] md:w-[70%] lg:w-[60%] mx-auto">Already have an account!</div>

                <div className="flex items-center w-[90%] md:w-[70%] lg:w-[60%] mx-auto justify-between">
                    <Link to={"/login"} className="btn btn-ghost w-full text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register