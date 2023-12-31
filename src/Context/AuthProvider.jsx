import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import PropTypes from "prop-types"

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);
    const [filteredBrand, setfilteredBrand] = useState([])
   
    useEffect(() => {
       const fetchData = async () => {

        try{
            const response = await fetch('https://technology-and-electronics-server-fhomi637j-atik-sahariyar.vercel.app/products');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error('Error fetching data:', response.statusText);
            }

        }
        catch (error){
            console.error('Error fetching data:', error);
        }
        finally{
            setLoading(false);
        }
       };
       fetchData();
    }, [])

    //  our brands
    const brands = [
        { id: 1, name: "Google", imageUrl: "https://i.ibb.co/SsH7LkB/google-brand.png" },
        { id: 2, name: "Apple", imageUrl: "https://i.ibb.co/Fb3nBbM/apple-brand.png" },
        { id: 3, name: "Samsung", imageUrl: "https://i.ibb.co/VV1mmx1/samsung-brand.jpg" },
        { id: 4, name: "Itel", imageUrl: "https://i.ibb.co/KxkXcW5/itel-brand.png" },
        { id: 5, name: "Sony", imageUrl: "https://i.ibb.co/ssNvkfN/sony.jpg" },
        { id: 6, name: "Walton", imageUrl: "https://i.ibb.co/rwv9mXy/Walton-brand.png" }
    ];

    // handle brand name wise data filter

        const handleBrand = async(brandName) => {
            const filteredProducts = await products?.filter(product => product.brandName === brandName);
            setfilteredBrand(filteredProducts);
            console.log(filteredProducts);
        }
   

    // create user with email and password
    const createUser = (email, password) => {
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
        return () => { unSbscribe() };
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading,
        products,
        brands,
        filteredBrand,
        handleBrand
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