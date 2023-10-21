import { useEffect, useState, } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [ cartProducts, setCartProducts ] = useState([])
  
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await fetch("http://localhost:5700/cartProducts");
        const data = await response.json();
        setCartProducts(data);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    fetchCartProducts();
  }, []);


    const loadProduct = useLoaderData();
    
 

    const {name, brandName, cetegory, shortDescription, photo, price, rating } = loadProduct;
    
    const handleAddToCart = async () => {
        //     send data to cart
            const productData = {
                name,
                brandName,
                cetegory,
                shortDescription,
                photo,
                price,
                rating
            };
            const isProductInCart = cartProducts.some((item) => item.name === productData.name);
            if(isProductInCart){
                Swal.fire({
                    title: 'Alert',
                    text: 'Product is already in the cart',
                    icon: 'X',
                    confirmButtonText: 'Ok'
                  })
                  return;
            }
            await fetch(`http://localhost:5700/cartProducts`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(productData)
            }) .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Add to cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })          
    }
    return (
        <div>
            <h1>Product details</h1>
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
                        <p>{shortDescription}</p>

                    </div>
                    <div className=" flex justify-center my-3">
                        <button onClick={handleAddToCart} className=" bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-800">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails