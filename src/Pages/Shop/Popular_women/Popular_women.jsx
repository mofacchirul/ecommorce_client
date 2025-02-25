
import img1 from '../../../assets/product_1.png';
import img2 from '../../../assets/p1_product_i2.png';
import img3 from '../../../assets/product_3.png';
import img4 from '../../../assets/product_4.png';
import img5 from '../../../assets/product_6.png';
import img6 from '../../../assets/product_10.png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
const products = [
    { id: 1, image: img2, category: "Casual T-Shirt", description: "Soft and breathable cotton T-shirts, perfect for everyday casual wear." },
    { id: 2, image: img1, category: "Winter Jacket", description: "Stylish and warm jackets designed for cold weather protection." },
    { id: 3, image: img3, category: "Sporty Hoodie", description: "Comfortable and lightweight hoodies for active and sporty lifestyles." },
    { id: 4, image: img4, category: "Formal Blazer", description: "Elegant blazers perfect for professional and formal occasions." },
    { id: 5, image: img5, category: "Denim Jacket", description: "Classic denim jackets that add a stylish touch to any outfit." },
    { id: 6, image: img6, category: "Summer Dress", description: "Light and breezy dresses ideal for summer outings and casual events." }
  ];

  import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
  
  console.log(products);
  

const PopularWomen = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
}, []);
  return (
    <div className="max-w-7xl mx-auto py-10">
      
      <div className='flex justify-center items-center py-10 '>
    <h1 className="lg:text-5xl text-2xl font-bold flex gap-2 text-center">
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
</div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          data-aos={product === 0 ? "zoom-in-left" : product === 1 ? "zoom-in-up" : product === 2 ? "zoom-in-right" : product === 3 ? "zoom-in-out" : product === 4 ? "zoom-out-up" : "zoom-out-down" }
          >
            <div className="overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.category} 
                className="w-full h-64 object-cover rounded-lg transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold  mt-4">{product.category}</h3>
           <p>{product.description}</p>
        <Link to={'/women'}>
        <button className='uppercase btn-block   btn text-white  bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
             Oder Now
            </button>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularWomen;