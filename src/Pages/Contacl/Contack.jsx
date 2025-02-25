import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
        Contact Me <FaPhoneAlt className="text-red-500" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full max-w-4xl">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-600">Let's Work Together</h3>
          <form className="mt-4 space-y-4">
            <div className="flex gap-4">
            <input type="text" placeholder="Frist Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input type="email" placeholder="Enter Email" className="input w-full" />
            <input type="namber" placeholder="Enter Namber" className="input w-full" />
            <textarea className="textarea w-full" placeholder="message"></textarea>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-600">Contact Information</h3>
          <div className="mt-4 space-y-3">
            {/* Email Link */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-blue-600" /> 
              <a href="mailto:mofaccharulhoque@gmail.com" className="text-blue-500 hover:underline">
                mofaccharulhoque@gmail.com
              </a>
            </p>
            
            {/* Phone Call Link */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-green-600" /> 
              <a href="tel:+8801820989712" className="text-green-500 hover:underline">
                01820989712
              </a>
            </p>
            
            {/* WhatsApp Link */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaWhatsapp className="text-green-500" />  
              <a href="https://wa.me/8801820989712" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                01820989712
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
