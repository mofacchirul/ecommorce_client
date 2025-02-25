import { Link } from "react-router-dom";

export default function CategoryCards() {
    const categories = [
      {
        title: "Kids 👶",
        description: "Explore adorable outfits for your little ones. Soft, stylish, and comfy fashion for every occasion! 🎈 Perfect for playtime, parties, and everyday adventures.",
        bg: "bg-blue-100",
      },
      {
        title: "Women 👩",
        description: "Elevate your style with elegant and trendy fashion. From casual to chic, find your perfect outfit! 💃 Designed for confidence, comfort, and modern fashion trends.",
        bg: "bg-pink-100",
      },
      {
        title: "Men 👨",
        description: "Upgrade your wardrobe with modern and classy styles. Stay confident, stylish, and comfortable! 🕶️ Perfect for work, weekends, and every moment in between.",
        bg: "bg-gray-100",
      },
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-xl ${cat.bg} w-80 text-center transition-transform transform hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-bold text-gray-800">{cat.title}</h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">{cat.description}</p>
          <Link>
            <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition duration-300">
              Shop Now 🛍️
            </button>
          </Link>
          </div>
        ))}
      </div>
    );
  }
  