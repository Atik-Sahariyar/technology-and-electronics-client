import { NavLink } from "react-router-dom";
import PropTypse from 'prop-types'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const BrandCard = ({brand}) => {
   const { handleBrand, brandName } = useContext(AuthContext)
  
   console.log(brandName);
    return (
        <div>
            <NavLink to="/brand-details">
                <div onClick={() => handleBrand(brand.name)} className=" w-96">
                    <img src={brand.imageUrl} className="w-full h-[265px]" alt="" />
                    <p className=" text-2xl font-semibold text-center">{brand.name}</p>
                </div>
                </NavLink>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypse.object
}
export default BrandCard;