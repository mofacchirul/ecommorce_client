import { useState } from "react";
import Secure from "../../Axios/Secure/Secure";
import Swal from "sweetalert2";

const Add_reciew = () => {
  const [rating, setRating] = useState(0);
  const secure= Secure()
  const handlereviws =(e)=>{
    e.preventDefault();
    const url = e.target.url.value;
    const Recipe = e.target.recipe.value;
    const suggestion = e.target.suggestion.value;
    const review = e.target.review.value;
    const user = {url,Recipe,suggestion,review,rating};
        secure.post('/reviws',user)   
                 .then(res=>{
                  if(res.data.insertedId){
                   Swal.fire({
                     title: 'reviws added to your card',
                     icon: "success",
                     draggable: true
                   });
           
                  
                  }
                   
                 })
    console.log(user);
    
  }
     
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-xl font-semibold mb-4">GIVE A REVIEW...</h2>
        <hr className="mb-4" />
        <h3 className="text-center text-lg font-semibold">RATE US!</h3>
        
        {/* Star Rating */}
       <form onSubmit={handlereviws} >
       <div className="flex justify-center my-4 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl cursor-pointer ${
                rating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
        <div>
            <label className="block font-medium"> Upload an Image (Optional) </label>
            <input
              type="url"
              name="url"
              placeholder="Recipe you liked most"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block font-medium">Which recipe you liked most?</label>
            <input
              type="text"
              name="recipe"
              placeholder="Recipe you liked most"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block font-medium">Do you have any suggestion for us?</label>
            <input
              type="text"
              name="suggestion"
              placeholder="Suggestion"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block font-medium">Kindly express your care in a short way.</label>
            <textarea
              name="review"
              placeholder="Review in detail"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button  className="w-full bg-yellow-700 text-white font-semibold p-2 rounded flex items-center justify-center space-x-2 hover:bg-yellow-800 transition">
            <span>Send Review</span>
            <span>🚀</span>
          </button>
        </div>

       </form>
      </div>
    </div>
  );
};

export default Add_reciew;
