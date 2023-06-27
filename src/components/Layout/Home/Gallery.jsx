import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Gallery = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://y-omega-five.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])

    return (
        <div className='lg:px-20 lg:my-8 gap-5' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700">
                <h2 className='text-3xl font-bold text-center my-5'>Photo Gallery</h2>
            
            <Marquee>
            {
                    toys.map(toy => <div key={toy.carName} className="card w-52 bg-base-100 border rounded-none bg-pink-100 hover:bg-sky-100 p-5 mr-10">
                        <figure><img src={toy.pictureUrl} style={{ width: 300 }} alt="car" /></figure>
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default Gallery;