import { Link } from "react-router-dom";
import { ArrowRightCircleIcon} from '@heroicons/react/24/solid'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Product = ({ data }) => {

    const { _id, carName, pictureUrl, price, rating, description } = data;



    return (

        <div className="card text-left rounded-none bg-sky-100 hover:bg-pink-100 hover:transition" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700">
            <figure><img src={pictureUrl} style={{ width: 150 }} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{carName}</h2>
                <p>{description}</p>
                <p> <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
                <div className="card-actions justify-between items-center">
                    <h5>$ {price}</h5>
                    <Link to={`/ViewDetails/${_id}`}><ArrowRightCircleIcon className="h-12 w-12 text-sky-300 hover:text-pink-300"/></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;