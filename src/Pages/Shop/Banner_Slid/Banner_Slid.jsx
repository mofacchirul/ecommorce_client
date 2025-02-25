
import { Link } from 'react-router-dom';
import img1 from '../../../assets/product_12.png';
import img2 from '../../../assets/product_23.png';
import img3 from '../../../assets/product_36.png';
import Typewriter from 'typewriter-effect';
const BannerSlider = () => {
    return (
        <div>
            {/* Carousel */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full h-[500px]  object-cover"
                        alt="Banner 1"
                    />
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg">
                    <h1 className="lg:text-5xl text-2xl font-bold flex gap-2 text-center">
                    <span className='uppercase text-transparent text-bg-clip bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
                        <Typewriter
                            options={{
                                strings: ['Popular Women Collection'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <p>
                The Popular Women Collection features trendy outfits, stylish accessories, and cool essentials that make every child stand out with confidence and charm. </p>
               <Link to={'/women'}>
               <button className='uppercase btn-block   btn text-white  bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
             Oder Now
            </button>
               </Link>

                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full h-[500px] relative object-cover"
                        alt="Banner 2"
                    />
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg">
                    <h1 className="lg:text-5xl text-2xl font-bold flex gap-2 text-center">
                    <span className='uppercase text-transparent text-bg-clip bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
                        <Typewriter
                            options={{
                                strings: ['Popular Kid Collection'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <p>
                The Popular men Collection features trendy outfits, stylish accessories, and cool essentials that make every child stand out with confidence and charm. </p>
               <Link to={'/men'}>
               <button className='uppercase btn-block   btn text-white  bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
             Oder Now
            </button>
               </Link>

                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full h-[500px] object-cover"
                        alt="Banner 3"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg">
                    <h1 className="lg:text-5xl text-2xl font-bold flex gap-2 text-center">
                    <span className='uppercase text-transparent text-bg-clip bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
                        <Typewriter
                            options={{
                                strings: ['Popular Kid Collection'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <p>
                The Popular Kids Collection features trendy outfits, stylish accessories, and cool essentials that make every child stand out with confidence and charm. </p>
               <Link to={'/kids'}>
               <button className='uppercase btn-block   btn text-white  bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
             Oder Now
            </button>
               </Link>

                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default BannerSlider;