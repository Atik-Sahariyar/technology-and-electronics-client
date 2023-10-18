import Root from "../MainLayout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import AddProduct from "../Pages/AddProduct/AddProduct";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: 'add-product',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default Routes;