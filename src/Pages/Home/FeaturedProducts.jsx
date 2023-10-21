import { useEffect, useState } from "react";


const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const products = featuredProducts.slice(0,9)
    console.log(products);
    useEffect(() => {
      
      const fetchFeaturedProducts = async () => {
        try {
          const response = await fetch('https://technology-and-electronics-server-fhomi637j-atik-sahariyar.vercel.app/products'); 
          const data = await response.json();
          setFeaturedProducts(data);
        } catch (error) {
          console.error('Error fetching featured products:', error);
        }
      };
  
      fetchFeaturedProducts();
    }, []);
    return (
        <div className=" my-10">
            <h3 className=" text-4xl text-center font-semibold">Our Featured Products</h3>
            <div>
                <div className="container mx-auto my-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                        products.map((product) => (
                            <div key={product.id} className="bg-white  rounded shadow p-4">
                                <img src={product.photo} alt={product.name} className=" object-cover mb-2" />
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-700">{product.cetegory}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-gray-900 font-bold">${product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;