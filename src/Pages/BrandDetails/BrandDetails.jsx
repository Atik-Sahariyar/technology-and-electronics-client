import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const BrandDetails = () => {

    const { products,brandName } = useContext(AuthContext);
     const [ filteredProducts, setFilteredProducts ] = useState([])
    console.log(products);
    console.log(brandName);

   
    useEffect(() => {
        const filterProducts =  products.filter(product => {
            console.log(product.brandName);
            product.brandName === brandName})
        setFilteredProducts(filterProducts)
        console.log(filterProducts);
    },[products, brandName])
    console.log(filteredProducts);
    

    return (
        <div>
            <h2>Brand details</h2>
            {
               
            }
        </div>
    );
};

export default BrandDetails;