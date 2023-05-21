import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then(result => setUser(result.user))
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setUser(null)
        toast.success('Sign out successful')
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoding(false)
            }
            else {
                setUser(null)
                setLoding(false)
            }
        })
        return unsubscribe
    }, [])

    const authInfo = {
        user,
        setLoding,
        loading,
        setUser,
        createUser,
        signIn,
        auth,
        signInWithGoogle,
        logOut
    }
    return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
}

export default AuthProvider