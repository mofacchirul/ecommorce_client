import { useContext } from "react";
import { Authcontext } from "../../../Provider/ProviderAuth/ProviderAuth";
import { useQuery } from "@tanstack/react-query";
import Secure from "../../../Axios/Secure/Secure";


const Add_home = () => {
    const {user}=useContext(Authcontext)
    const axios=Secure()

    
    const { data: Payment, } = useQuery({
        queryKey: ['admin-Stutus'],
        queryFn: async () => {
            const res = await axios.get('/admin-status');
          
            return res.data;
        },
    });
    
     
    return (
        <div>
            <h1 className="text-white">
                <span>Hi, I am Add home ,wecome to back 
                     </span>
                     {user?.displayName ? user.displayName : 'back'}
            </h1>

            <div className="text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white gap-6">
                    {/* Revenue Card */}
                    <div className="bg-[#BB34F5] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white">Revenue</h3>
                        <p className="text-2xl font-bold text-blue-600">
                            ${Payment?.revece ?? 0}
                        </p>
                    </div>

                    {/* Customers Card */}
                    <div className="bg-[#BB34F5] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white">User</h3>
                        <p className="text-2xl font-bold text-green-600">
                            {Payment?.user ?? 0}
                        </p>
                    </div>

                    {/* Products Card */}
                    <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white">Men</h3>
                        <p className="text-2xl font-bold text-purple-600">
                            {Payment?.men ?? 0}
                        </p>
                    </div>
                    <div className="bg-amber-400 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white">Woman</h3>
                        <p className="text-2xl font-bold text-purple-600">
                            {Payment?.woman ?? 0}
                        </p>
                    </div>
                    <div className="bg-[#FE4880] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white">Kids</h3>
                        <p className="text-2xl font-bold text-purple-600">
                            {Payment?.kids ?? 0}
                        </p>
                    </div>

                    {/* Orders Card */}
                    <div className="bg-[#6AAEFF] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white">Orders</h3>
                        <p className="text-2xl font-bold text-red-600">
                            {Payment?.item ?? 0}
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Add_home;