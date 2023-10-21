import { useLoaderData } from "react-router-dom";
import MyCartProductCard from "./MyCartProductCard";
import { useState } from "react";


const MyCart = () => {
    
    const loadCartProducts = useLoaderData();
    const [ cartProducts, setCartProducts ] =  useState(loadCartProducts)
    console.log(loadCartProducts);
    return (
        <div>
            <h3 className="text-4xl font-semibold text-center my-5">My cart</h3>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {
                cartProducts.map( cartProduct => <MyCartProductCard 
                    key={cartProduct._id} 
                    cartProduct ={cartProduct}
                    cartProducts={cartProducts}
                     setCartProducts = {setCartProducts}>

                     </MyCartProductCard>)
            }
          
           </div>
        </div>
    );
};

export default MyCart;