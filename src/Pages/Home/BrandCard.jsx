import { NavLink } from "react-router-dom";
import PropTypse from 'prop-types'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const BrandCard = ({brand}) => {
   const { handleBrand} = useContext(AuthContext)
  

    return (
        <div>
            <NavLink to="/brand-details">
                <div onClick={() => handleBrand(brand.name)} className=" w-96 bg-[#F4F3F0]">
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