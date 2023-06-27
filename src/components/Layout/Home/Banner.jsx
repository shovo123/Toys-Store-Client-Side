
import man from '../../../assets/banner-man.png';
const Banner = () => {
    return (

        <div className={`py-56 lg:py-40 bg-[url('https://i.ibb.co/gjVTwyC/banner-1.jpg')]  bg-center bg-cover relative `}>
            <div className={`absolute inset-0 bg-[url('https://i.ibb.co/GxX0Qt0/banner-2.png')] bg-cover bg-no-repeat bottom-0`}>
                <div className='lg:px-24 items-center lg:flex  w-full justify-between'>
                    <div className="py-2 lg:w-50 text-center " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                    >
                        <h2 className="text-5xl font-bold ">Best Kids Store<br />& Online Shop</h2>
                    </div>
                    <div className={`bg-[url('https://i.ibb.co/GxX0Qt0/banner-2.png)] bg-cover lg:w-50`} data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"

                    >
                        <img src={man} style={{ width: 300 }} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;