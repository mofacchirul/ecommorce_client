import team1 from '../../../assets/p1_product_i1.png'
import team2 from '../../../assets/product_18.png'
import { motion } from 'motion/react';
import { easeOut } from 'motion';
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        
        <div className="hero  ">
        <div className="hero-content flex-col items-center lg:flex-row-reverse">
         <div className='flex-1 space-y-4  gap-5'>
         <motion.img
         animate={{y:[50,100,50]}}
         transition={{duration: 5.3,repeat:Infinity}}
            src={team1}
            className="max-w-sm h-60 w-96 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-pink-400 rounded-lg shadow-2xl" />
             <motion.img
              animate={{x:[100,150,100]}}
              transition={{duration: 5.3,repeat:Infinity}}
            src={team2}
            className="max-w-sm h-60 w-96 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-400 rounded-lg shadow-2xl" />
         </div>
          <div className='flex-1'>
            <motion.h1         
            animate={{x:[0,50,0],color:['#b933ff','#683c98','#3c985c']}}
            transition={{duration:7.3,repeat:Infinity,ease:easeOut, delay:1}}
            className="lg:text-5xl text-2xl font-bold">
           NEW ARRIVALS ONLY
            </motion.h1>
            
 <h1 className="lg:text-5xl text-2xl font-bold flex gap-2"> <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        <Typewriter

                            options={{
                                strings: [ 'new collections for everyone' ],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>

            <p className="py-6">
            🛍️ Be the First to Own It! 🛍️
            Our latest collection has just dropped, bringing you a mix of bold, chic, and sophisticated designs. Whether you’re dressing up for a special occasion or looking for casual everyday wear, our new arrivals have something for everyone. Shop now before they’re gone!
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;