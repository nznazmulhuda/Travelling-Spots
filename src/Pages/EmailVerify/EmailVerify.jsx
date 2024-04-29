import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { updateEmail } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "react-dynamic-title";


function EmailVerify() {
    
    useTitle("Add Email");
    const {loading, emailCheck, setEmailCheck} = useContext(AuthContext)
    const navigate = useNavigate()
    const {state} = useLocation()

    const handleUpdateEmail = e => {
        if(emailCheck) {
            navigate("/");
            toast.error("Already have an email!") 
        } else {
            e.preventDefault();
            const newEmail = e.target.email.value;
            updateEmail(auth.currentUser, newEmail)
                .then(()=> {
                    toast.success("Success to add email!")
                    navigate(state ? state : "/")
                    setEmailCheck(newEmail)
                })
                .catch(e=> {
                    toast.error(e.message);
                })
        }
        
        e.target.reset()
    }


  return (
    <>
        <div className="border-y-2 border-green-600 rounded-3xl my-10 py-10">
            <h1 className="text-center text-3xl font-bold mb-5 -mt-5">
                <span className="text-green-700">E</span>mail <span className="text-green-700">A</span>ddress
            </h1>

            <form onSubmit={handleUpdateEmail} className={`border ${loading && "hidden"} rounded-lg py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-10 w-[90%] md:w-[70%] lg:w-[60%] mx-auto`}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailCheck && "cursor-not-allowed"}`} name="email" type="email" placeholder="Email address" value={emailCheck && emailCheck} disabled={emailCheck && "disabled"} />
                </div>

                <button className={`${emailCheck && "btn-disabled"} btn btn-ghost w-full text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white`}>Update Email</button>
            </form>
        </div>
        
    </>
  )
}

export default EmailVerify