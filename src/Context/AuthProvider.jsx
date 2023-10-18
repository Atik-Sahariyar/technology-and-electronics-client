import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import{ GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,  getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import PropTypes from "prop-types"

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
     const [ user, setUser ] = useState(null);
     const [ loading, setLoading ] =  useState(true) 

    
    // create user with email and password
     const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password);
     }
    
    // Sign in user with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google sign in
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // user log out
    const logOut = () => {
        setLoading(true);
        return signOut((auth))
    }
    
    // current user
    useEffect(() => {
        const unSbscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth changed:', currentUser);
            setUser(currentUser);
           setLoading(false);
        })
        return () => { unSbscribe()};
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading
    }
    return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object   
}

export default AuthProvider;