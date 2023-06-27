
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";
const UpdateToy = () => {
    const { user } = useContext(AuthContext)
    const loadedToys = useLoaderData();
    const { _id, carName, pictureUrl, rating, price, sellerName, quantity, subCategory, description} = loadedToys;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://y-omega-five.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated Successfully',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    };

    return (
        <div>
            <h2 className="hero bg-base-100 text-5xl text-center my-5 ">Update Toy</h2>

            <div className="hero bg-base-100">
                <div className="hero-content flex-col ">
                    <div className="card bg-sky-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body grid lg:grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={carName}{...register("carName")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={sellerName}{...register("sellerName")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input className="input" defaultValue={user?.email}{...register("sellerEmail", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={price}{...register("price")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={rating}{...register("rating")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={quantity}{...register("quantity")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={pictureUrl}{...register("pictureUrl")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input className="input input-bordered" defaultValue={description}{...register("description")} />
                                </div>

                            </div>
                            <div className="form-control mt-0 mb-5">
                                <label className="label">
                                    <span className="label-text text-center">Category</span>
                                </label>
                                <select className="input" defaultValue={subCategory}{...register("subCategory")}>
                                    <option value="police">Police</option>
                                    <option value="luxury">Luxury</option>
                                    <option value="construction">Construction</option>
                                </select>
                            </div>
                            <div>
                                <p>{errors.message}</p>
                            </div>
                            <div className="form-control">
                                <input className="btn bg-pink-300 border-none" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;