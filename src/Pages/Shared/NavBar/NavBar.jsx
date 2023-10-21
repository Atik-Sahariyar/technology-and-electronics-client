import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [userName, setUserName] = useState('')
    const [userPhoto, setUserPhoto] = useState('')


    useEffect(() => {
        if (user) {
            const { displayName, photoURL } = user;
            setUserName(displayName);
            setUserPhoto(photoURL);
        }
        else {
            setUserName('');
            setUserPhoto('');
        }
    }, [user])



    const links = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/add-product">Add Product</NavLink></li>
        <li> <NavLink to="/my-cart">My Cart</NavLink></li>
        <li> <NavLink to="/register">Registration</NavLink></li>

    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }



    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className=" flex flex-col md:flex-row lg:flex-row items-center">
                    <img className=" w-16 h-16 rounded-full" src="https://i.ibb.co/xCQ3Zfd/logo.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Technology and Electronics</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <div className=" flex flex-col md:flex-row lg:flex-row gap-1 items-center">
                            <div className=" flex flex-col md:flex-row lg:flex-row items-center">
                                <img src={userPhoto} className=" w-12 h-12 rounded-full" alt="" />
                                <p>{userName}</p></div>
                            <button onClick={handleLogOut} className="btn">Sign Out</button>
                        </div>
                    )
                        :
                        <Link to="/signIn">
                            <button className="btn">Sign In</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;