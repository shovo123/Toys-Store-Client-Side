import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ViewDetails = () => {
    useTitle('ToyDetails')
    const loadedToys = useLoaderData();
    const { carName, pictureUrl, rating, price, sellerName, quantity, sellerEmail, description } = loadedToys;

    return (
        <div>
            <h2 className="text-center text-5xl my-5">Toy Details</h2>
            <div className="grid lg:flex my-5 w-full lg:justify-center">
                <div className="bg-sky-100 w-96">
                    <img src={pictureUrl} alt="" />
                </div>
                <div className="bg-pink-100 w-96 py-10 px-10 border-b-4">
                    <h2 className="font-bold text-xl border-b-4 border-sky-200">{carName}</h2>
                    <p className="border-b-4 py-2 border-sky-200"><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
                    <p className="border-b-4 py-2 border-sky-200">$ {price}</p>
                    <p className="border-b-4 py-2 border-sky-200">Quantity : {quantity}</p>
                    <p className="border-b-4 py-2 border-sky-200">Seller : {sellerName}</p>
                    <p className="border-b-4 py-2 border-sky-200">Seller email: {sellerEmail}</p>
                    <p className="border-b-4 py-2">Description: {description}</p>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;


