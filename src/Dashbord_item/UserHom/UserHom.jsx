import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaRedo, FaGift, FaStar } from "react-icons/fa";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";
import CategoryCards from "./Information";


const UserHome = () => {
  const {user}=useContext(Authcontext)

  useEffect(() => {
    // Fetch user data and recommendations from backend
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <motion.h1 className="text-3xl font-bold mb-4 text-orange-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Welcome back, {user?.displayName || "Guest User"}! 🎉
      </motion.h1>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 flex items-center gap-3 border rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg">
          <FaTruck className="text-blue-500 text-2xl" />
          <span>Track Order</span>
        </div>
        <div className="p-4 flex items-center gap-3 border rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg">
          <FaRedo className="text-green-500 text-2xl" />
          <span>Reorder</span>
        </div>
        <div className="p-4 flex items-center gap-3 border rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg">
          <FaGift className="text-purple-500 text-2xl" />
          <span>Exclusive Deals</span>
        </div>
        <div className="p-4 flex items-center gap-3 border rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg">
          <FaStar className="text-yellow-500 text-2xl" />
          <span>Reviews</span>
        </div>
      </div>
      
      {/* Recommended Products */}
      <h2 className="text-xl font-semibold mb-3">Just for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* {recommended.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-lg bg-white">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white hover:bg-blue-600">View Details</button>
          </div>
        ))} */}
      </div>
      <CategoryCards></CategoryCards>
    </div>
  );
};

export default UserHome;
