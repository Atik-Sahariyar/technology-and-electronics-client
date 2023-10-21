import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const MyCartProductCard = ({cartProduct, cartProducts, setCartProducts}) => {
    const {_id, name, brandName, cetegory,  photo, price, rating } = cartProduct;
  
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5700/cartProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = cartProducts.filter(product => product._id !== _id);
                            setCartProducts(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
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
                <button onClick={() => handleDelete(_id)} className=' bg-red-600 text-white hover:bg-red-900 px-3 my-2 rounded-md '>Delete</button>
            </div>
            
          </div>
        </div>
    );
};

MyCartProductCard.propTypes = {
    cartProduct: PropTypes.object,
    cartProducts: PropTypes.array,
    setCartProducts: PropTypes.func
}
export default MyCartProductCard;