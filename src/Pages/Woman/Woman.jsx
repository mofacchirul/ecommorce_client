import UseTanwoman from "./UseTanWoman/UseTanwoman";
import banner from '../../assets/banner_women.png';
import { FaEye } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
const Woman = () => {
    const [womans, loading] = UseTanwoman();

    // Check if data is still loading
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <img src={banner} alt="Banner" />
            </div>
           <div className="">
           <h1 className="lg:text-5xl text-2xl font-bold flex gap-2  items-center justify-center py-10 ">
        <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
            <Typewriter
                options={{
                    strings: ['Popular Womens Collection'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </span>
    </h1>
           <div className=" grid gap-3 grid-cols-2  md:grid-cols-2 lg:grid-cols-4 ">
                {womans && womans.length > 0 ? (
                    womans.map((item) => (
                        <div key={item._id} className=" p-3 border-2 border-solid border-amber-400 rounded-3xl">
                            <img src={item.image_url} className="h-72 mx-auto w-full"  alt={item.name} />
                            <div>
                                <h1 className="lg:text-2xl text-xl font-bold ">{item.name}</h1>
                                <div className="flex items-center justify-between">
                               <div className="flex gap-1">
                               <div className="rating">
  <input type="radio" name="rating-2" className="mask  mask-star-2 bg-orange-400 " aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>   <p>{item.rating}</p>
                               </div>
                                    <p className="flex items-center gap-2"><FaEye /> : ({item.reviews})</p>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <p >Original price : <p className="line-through"> {item.original_price} </p> </p>
                                    <p>Discounted price : {item.discounted_price}</p>
                                </div>
                                <Link to={`/view_detels/${item._id}`}>
                                <button className='uppercase btn-block   btn text-white  bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
                                    View Detels
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
           </div>
        </div>
    );
};

export default Woman;
