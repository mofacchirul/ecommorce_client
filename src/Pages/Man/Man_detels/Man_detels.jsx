
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Itemtan from "../../../Axios/Hook/Item/Item";
import Secure from "../../../Axios/Secure/Secure";
import { Authcontext } from "../../../Provider/ProviderAuth/ProviderAuth";
import Swal from "sweetalert2";
const Man_detels = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);

    const [refetch]= Itemtan()
    const secure = Secure()
    const Navigate=useNavigate()
    const {user}= useContext(Authcontext)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-semibold text-gray-700">Loading...</div>
            </div>
        );
    }
    const HandleAddcard= (data)=>{

        if(user && user.email){
            const cartItem = {
                dataid:data._id,
                name: data.name,
                image: data.image_url,
                price: data.discounted_price,
                date: new Date().toISOString(), // Current date
                size: selectedSize,
                email: user?.email, // Ensure user is logged in
            };
            console.log(cartItem);
            secure.post('/item',cartItem)   
          .then(res=>{
           if(res.data.insertedId){
            Swal.fire({
              title: `${data.name} added to your card`,
              icon: "success",
              draggable: true
            });
    
            refetch()
           }
            
          })
    
        }
        else{
          Swal.fire({
            title: "Please Login to add to the carts",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login !"
          }).then((result) => {
            if (result.isConfirmed) {
            Navigate("/login", {state:{from:location}})
            }
          });
        }
       
        
      }

    return (
        <div className="flex items-center justify-center p-10">
            {/* Left Side: Image Gallery */}
            <div className="flex">
                {/* Small Thumbnail Images */}
                <div className="flex flex-col gap-2 mr-4">
                    {[...Array(4)].map((_, index) => (
                        <img 
                            key={index} 
                            src={data.image_url} 
                            alt="Thumbnail" 
                            className="w-28 h-28 object-cover border border-gray-300 rounded-md cursor-pointer"
                        />
                    ))}
                </div>
                
                <div>
                    <img src={data.image_url} alt={data.name} className="w-96 h-auto rounded-lg" />
                </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="ml-10 w-2/5">
                <h2 className="text-2xl font-bold">{data.name}</h2>
                {/* Rating */}
                <p className="text-yellow-500 text-lg">★★★★★ ({data.reviews})</p>
                {/* Pricing */}
                <p className="text-lg">
                    <span className="line-through text-gray-500">${data.original_price}</span>
                    <span className="text-red-600 font-semibold ml-2">${data.discounted_price}</span>
                </p>
                {/* Description */}
                <p className="text-gray-600 my-2">{data.description}</p>
                
                {/* Size Selection */}
                <p className="font-semibold mt-3">Select Size</p>
                <div className="flex gap-3 mt-2">
                    {data.sizes_available.map((size) => (
                        <button 
                            key={size} 
                            className={`border px-4 py-2 rounded-md 
                                        ${selectedSize === size ? "bg-red-600 text-white" : "hover:bg-gray-200"}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                {/* Add to Cart Button */}
                <button onClick={()=>HandleAddcard (data)} className="mt-5 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default Man_detels;