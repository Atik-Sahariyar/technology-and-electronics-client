import Root from "../MainLayout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoutes";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../ErrorPage/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:  <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/register',
                element: <Register></Register>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> ,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
              path: '/update-product/:id',
              element: <PrivateRoute> <UpdateProduct></UpdateProduct> </PrivateRoute>,
              errorElement: <ErrorPage></ErrorPage>,
              loader: ({params}) => fetch(`https://technology-and-electronics-server-fhomi637j-atik-sahariyar.vercel.app/products/${params.id}`)
            },
            {
                path: "/brand-details",
                element: <PrivateRoute> <BrandDetails></BrandDetails> </PrivateRoute>,  
                errorElement: <ErrorPage></ErrorPage>         
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails></ProductDetails>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: ({params}) => fetch(`https://technology-and-electronics-server-fhomi637j-atik-sahariyar.vercel.app/products/${params.id}`)     
            },
            {
                path: '/my-cart',
                element: <PrivateRoute> <MyCart></MyCart> </PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: () => fetch('https://technology-and-electronics-server-fhomi637j-atik-sahariyar.vercel.app/cartProducts')
            }
        ]
    }
])

export default Routes;