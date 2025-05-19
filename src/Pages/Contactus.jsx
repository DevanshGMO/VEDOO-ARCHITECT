import React, { useEffect, useState } from "react";
import Map from "../assets/Map.png";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const Contactus = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-white">

      <div className="w-full h-[400px]">
        <img src={Map} alt="Map" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left - Contact Info */}
        <div
          className={`bg-[#002B45] text-white p-10 relative overflow-hidden
            transform transition-all duration-700 ease-out
            ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
        >
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="mb-6 text-gray-300">Say something to start a live chat!</p>

          <div className="space-y-6 text-sm">
            <div className="flex items-center space-x-4">
              <FiPhone className="text-xl" />
              <span>+91 97763 43829</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiMail className="text-xl" />
              <span>arnav.eagle@gmail.com</span>
            </div>
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-xl mt-1" />
              <span>
                BMP 543, 1st floor, Nallapullappa Garden,
                <br />
                Akkithimanahalli Layout (Opp Divyashree Chambers)
                <br />
                Shanthinagar, Bangalore - 560027
              </span>
            </div>
            <div className="flex space-x-4 pt-6 text-xl text-[#FF9100]">
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -mb-24 -ml-24"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        </div>

        {/* Right - Contact Form */}
        <form
          className={`bg-white p-10 space-y-6
            transform transition-all duration-700 ease-out delay-300
            ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Inputs with focus & active scale animation */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                className="border-b border-gray-400 py-2 px-1 focus:outline-none focus:ring-2 focus:ring-[#FF9100] focus:scale-105 transition-transform duration-150"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="border-b border-gray-400 py-2 px-1 focus:outline-none focus:ring-2 focus:ring-[#FF9100] focus:scale-105 transition-transform duration-150"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="border-b border-gray-400 py-2 px-1 focus:outline-none focus:ring-2 focus:ring-[#FF9100] focus:scale-105 transition-transform duration-150"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="border-b border-gray-400 py-2 px-1 focus:outline-none focus:ring-2 focus:ring-[#FF9100] focus:scale-105 transition-transform duration-150"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-700">Select Subject?</label>
            <div className="flex items-center space-x-6">
              {["general", "quotation", "design"].map((val) => (
                <label
                  key={val}
                  className="inline-flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="subject"
                    value={val}
                    className="form-radio text-[#FF9100] focus:scale-110 transition-transform duration-150"
                  />
                  <span className="ml-2 capitalize">{val.replace("-", " ")}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Write your message.."
              className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none focus:ring-2 focus:ring-[#FF9100] focus:scale-105 transition-transform duration-150"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#FF9100] text-white px-8 py-3 rounded shadow-md
            hover:bg-[#e07a00] active:scale-95 active:shadow-lg transition duration-150"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
