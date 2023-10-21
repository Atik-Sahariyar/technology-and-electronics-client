import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BrandDetailsCard from "./BrandDetailsCard";

const BrandDetails = () => {
    const { filteredBrand } = useContext(AuthContext)
    if(filteredBrand.length === 0){
        return  <div className="flex justify-center h-screen items-center">
            <p className=" text-4xl ">Products not available now</p>
        </div>
    }

    return (
        <div>
            <h2 className=" text-4xl font-bold text-center my-6">Brand details</h2>
            <div className=" mx-auto grid gap-4">
                {
                    filteredBrand?.map(product => <BrandDetailsCard key={product._id} product={product}></BrandDetailsCard>)
                }
            </div>
          
        </div>
    );
};

export default BrandDetails;