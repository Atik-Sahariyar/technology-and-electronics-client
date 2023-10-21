import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BrandDetailsCard = ({ product }) => {
    const {_id, name, brandName, cetegory, photo, price, rating } = product;
    
    return (
        <div className={`w-1/2 mx-auto rounded overflow-hidden shadow-lg  h-full `}>
            <img src={photo} alt={name} className="w-full  object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2"> {brandName}</p>
                <p className="text-gray-700 text-base mb-2">{cetegory}</p>
                <p className="text-gray-900 font-semibold text-lg mb-2">Price: ${price}</p>
                <div className="flex items-center mb-2">
                    <svg
                        className="w-5 h-5 fill-current text-yellow-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 0l2.4 6.2h6.3l-5 4.9 1.8 6.3-5-4.9-5 4.9 1.8-6.3-5-4.9h6.3z" />
                    </svg>
                    <span className="text-gray-700"> {rating} stars</span>
                </div>
                <div className=' flex  justify-between'>
                    <NavLink to={`/product-details/${_id}`}>
                        <button className=' p-2 bg-blue-500 text-white rounded-lg px-3 hover:bg-blue-800'>Details</button>
                    </NavLink>
                     <NavLink to={`/update-product/${_id}`}>
                     <button className=' p-2 bg-blue-500 text-white rounded-lg px-3 hover:bg-blue-800'>Update</button>
                     </NavLink>
                </div>
            </div>
        </div>
    );
};


BrandDetailsCard.propTypes = {
    product: PropTypes.object
}
export default BrandDetailsCard;

