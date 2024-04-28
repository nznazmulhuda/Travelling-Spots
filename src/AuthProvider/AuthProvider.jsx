import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { auth } from "../Firebase/Firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth"
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { toast } from "react-toastify"

export const AuthContext = createContext(null)

function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const githubLogin = () => {
        setLoading(true);
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // Login user by email and pass
    const emailLogin = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => toast.success("Sign out success!"))
            .catch((e) => toast.error(e.message));
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser("");
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        googleLogin,
        githubLogin,
        loading,
        user,
        emailLogin,
        signOutUser
    }
    
  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider