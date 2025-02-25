import Typewriter from "typewriter-effect";
import aboutImage from "../../../assets/product_36.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 }); // Initialize AOS globally
  }, []);

  return (
    <div id="about" className="">
     
     
     
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        {/* Image Section */}
        <img
          data-aos="fade-left"
          src={aboutImage}
          alt="About"
          className="lg:w-[600px] lg:h-[400px] rounded-lg object-cover shadow-2xl  transform hover:scale-110 transition-transform duration-500"
        />

        {/* Text Section */}
        <div data-aos="fade-right">
        <h1 className="lg:text-5xl text-2xl font-bold flex gap-2">
        {" "}
        <span className="uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Typewriter
            options={{
              strings: [
                'Fun, safe, and stylish kids essentials for happy childhood moments! 😊🎈',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
          <p>
            Welcome to SHOPPER, your one-stop destination for all things kids!
            We believe childhood is a magical journey filled with joy,
            curiosity, and endless adventures. That’s why we offer a wide range
            of high-quality, safe, and fun products designed to bring smiles to
            your little ones. From stylish and comfortable clothing to
            educational toys and essential baby gear, we carefully curate our
            collection to ensure the best for your child. Our mission is to make
            parenting easier by providing products that are not only adorable
            but also practical and durable. At kIDS, we prioritize safety and
            quality, partnering with trusted brands to ensure your child gets
            nothing but the best. Whether you’re shopping for a newborn, a
            toddler, or a growing kid, we have something special for every stage
            of their journey. Thank you for choosing us to be a part of your
            little one’s world! 🌟💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
