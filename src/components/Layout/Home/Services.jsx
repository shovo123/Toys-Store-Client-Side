import img from '../../../assets/sr-1.png';
import img2 from '../../../assets/sr-2.png';
import img3 from '../../../assets/sr-3.png';
const Services = () => {
    return (
        <div className='lg:md:mx-20'>
            <h2 className='text-center font-bold text-3xl my-6'>Our Services</h2>
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="card bg-gray-100 hover:bg-gray-300  shadow-xl" data-aos="fade-right"
                data-aos-duration="1500"
                >
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Money Return</h2>
                        <p>If any of our products are faulty or broken, your money will be refunded</p>
                    </div>
                </div>
                <div className="card bg-gray-100 hover:bg-gray-300 shadow-xl" data-aos="zoom-in-down"
                
                data-aos-duration="1500">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Support 24/7</h2>
                        <p>Our shop is open 24 hours a day and is always serviced</p>
                    </div>
                </div>
                <div className="card bg-gray-100 hover:bg-gray-300 shadow-xl" data-aos="fade-left"
                
                data-aos-duration="1500">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free Shipping</h2>
                        <p>We provide free home delivery if you buy any product from our shop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;