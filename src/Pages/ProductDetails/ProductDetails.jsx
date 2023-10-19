import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const ProductDetails = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    console.log(id);

    const { products } = useContext(AuthContext);

    useEffect(() => {
        const findProduct = products?.find(item => item._id === id);
        setProduct(findProduct)
        console.log(findProduct);
    }, [id, products])

    console.log(product._id);
    // const { name, brandName, cetegory, photo, price, rating } = product;
    return (
        <div>
            <h1>Product details</h1>
            <div className={`w-1/2 mx-auto rounded overflow-hidden shadow-lg  h-full `}>
                <img src={product.photo} alt={name} className="w-full  object-cover" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base mb-2"> {product.brandName}</p>
                    <p className="text-gray-700 text-base mb-2">{product.cetegory}</p>
                    <p className="text-gray-900 font-semibold text-lg mb-2">Price: ${product.price}</p>
                    <div className="flex items-center mb-2">
                        <svg
                            className="w-5 h-5 fill-current text-yellow-500 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0l2.4 6.2h6.3l-5 4.9 1.8 6.3-5-4.9-5 4.9 1.8-6.3-5-4.9h6.3z" />
                        </svg>
                        <span className="text-gray-700"> {product.rating} stars</span>
                        <p>{product.shortDescription}</p>

                    </div>
                    <div className=" flex justify-center my-3">
                        <button className=" bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-800">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;