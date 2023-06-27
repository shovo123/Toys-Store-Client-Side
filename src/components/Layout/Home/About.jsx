

const About = () => {
    return (

        <div className='md:mx-20 my-28 grid md:grid-cols-2 bg-gray-200 hover:bg-sky-200 rounded'  data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className='p-2' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                >
                <img className='img-fluid rounded' src="https://cdn.trendhunterstatic.com/thumbs/341/toy-store.jpeg" alt="" />
            </div>
            <div className="section-title flex flex-col justify-center" 
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000">
                <div className=' px-8 py-12'>
                    <div className='flex mx-auto space-x-3'>
                        <div className=' w-20 md:w-24 h-1 bg-gray-300 inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                        <h2 className='text-4xl font-lato font-bold'>About Us </h2>
                        <div className='w-20 md:w-24 h-1 bg-gray-300 inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                    </div>
                    <h3 className="text-xl font-bold border-b-4 py-2 border-gray-300">Contact info</h3>
                    <p className="border-b-4 py-2 border-gray-300"><span className="text-xl">Email:</span> uniquetoys@gmail.com</p>
                    <p className="border-b-4 py-2 border-gray-300">Mirpur-10,Dhaka,Bangladesh</p>
                    <p className='my-5 font-popins text-slate-800'>
                        We use all the information we collect from you to receive orders, send you emails and provide the most efficient and fastest Internet experience.This allows us to offer you special offers and discounts.We will not only provide your information to third parties unless you have your consent.</p>
                </div>
            </div>
        </div>

    );
};

export default About;