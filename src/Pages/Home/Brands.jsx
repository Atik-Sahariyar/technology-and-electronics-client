// import { NavLink } from "react-router-dom";
import { useContext } from "react";
import BrandCard from "./BrandCard";
import { AuthContext } from "../../Context/AuthProvider";


const Brands = () => {
   
    const { brands } = useContext(AuthContext) 

  
    return (
        <div className=" mx-8 my-5">
            <h2 className=" text-4xl font-bold text-center my-5">Our brands</h2>
            <div className=" grid grid-cols-1 gap-2 items-center justify-center md:grid-cols-3 ">
                { 
                   brands.map( brand => (
                    <div key={brand.id}>
                    <BrandCard  brand ={brand} ></BrandCard>
                    </div>

                   )
                    
         )
                }
  
  
            </div>
        </div>
    );
};

export default Brands;