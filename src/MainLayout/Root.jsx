import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;