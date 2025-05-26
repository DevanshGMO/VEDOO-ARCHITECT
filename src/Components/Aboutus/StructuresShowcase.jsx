import { useEffect, useState } from 'react';
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
const StructuresShowcase = () => {
  // State to trigger animations
  const [animate, setAnimate] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  const images = [
    Image1, 
    Image2, 
    Image3, 
    Image4,
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 mt-10">

      <h1
        className={`text-6xl md:text-6xl font-semibold text-gray-900 mb-8 text-left transition-opacity duration-1000 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Structures <span className="text-[#ff9100]"> <br />That Inspire</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`relative overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }} 
          >
            <img
              src={imageUrl}
              alt={`Structure ${index + 1}`}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = `https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error`; 
              }}
            />
            {/* Optional overlay for text or effects */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">View Details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StructuresShowcase;
