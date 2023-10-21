import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    

     const product = useLoaderData();
     const {_id, name, brandName, cetegory,shortDescription, photo, price, rating } = product;
     console.log(product);
    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const cetegory = form.cetegory.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updateProductInfo = {
            name,
            brandName,
            cetegory,
            price,
            shortDescription,
            rating,
            photo,
        }
        console.log(updateProductInfo);

        // send data to server
        fetch(`https://technology-and-electronics-server-fhomi637j-atik-sahariyar.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateProductInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
                    

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update a Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Cetegory</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cetegory" defaultValue={cetegory} placeholder="cetegory Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" defaultValue={price} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Short description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateProduct;