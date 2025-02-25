import { useState } from "react";
import Typewriter from "typewriter-effect";
import Secure from "../../../Axios/Secure/Secure";

const Img_key = import.meta.env.VITE_IMG_KEY;
const image_hosting = `https://api.imgbb.com/1/upload`;

const Add_kids = () => {
  const axios = Secure();
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    reviews: "",
    original_price: "",
    discounted_price: "",
    description: "",
    sizes_available: "",
    category: "",
    tags: "",
    image: "", 
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const imgResponse = await fetch(`${image_hosting}?key=${Img_key}`, {
          method: "POST",
          body: formData,
        });
        const imgData = await imgResponse.json();
        if (imgData.success) {
          imageUrl = imgData.data.url;
        }
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed!");
        return;
      }
    }

    const productData = {
      ...formData,
      sizes_available: formData.sizes_available.split(","),
      category: formData.category.split(","),
      tags: formData.tags.split(","),
      image: imageUrl, 
    };

    try {
      const response = await axios.post("/kids", productData);
      console.log("Product added:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div>
      <h1 className="lg:text-5xl text-2xl font-bold flex gap-2 items-center justify-center py-10">
        <span className="uppercase text-transparent text-bg-clip bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500">
          <Typewriter
            options={{
              strings: ["Add Kids Collection"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold">Product Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-bold">Rating:</label>
            <input
              type="number"
              name="rating"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-bold">Reviews:</label>
            <input
              type="number"
              name="reviews"
              value={formData.reviews}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-bold">Original Price:</label>
            <input
              type="number"
              name="original_price"
              value={formData.original_price}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-bold">Discounted Price:</label>
            <input
              type="number"
              name="discounted_price"
              value={formData.discounted_price}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-bold">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded h-24"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block font-bold">
              Sizes Available (comma-separated):
            </label>
            <input
              type="text"
              name="sizes_available"
              value={formData.sizes_available}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-bold">Category (comma-separated):</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-bold">Tags (comma-separated):</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block font-bold">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-6 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_kids;
