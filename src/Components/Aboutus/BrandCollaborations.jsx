import React, { useEffect, useState } from "react";
// Import your local brand logo images
import BrandLogo1 from "../../assets/BrandLogo1.png";
import BrandLogo2 from "../../assets/BrandLogo2.png";
import BrandLogo3 from "../../assets/BrandLogo3.png";
import BrandLogo4 from "../../assets/BrandLogo4.png";
import BrandLogo5 from "../../assets/BrandLogo5.png";
import BrandLogo6 from "../../assets/BrandLogo6.png";

const BrandCollaborations = () => {
  // State to trigger animations
  const [animate, setAnimate] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    // Set a timeout to ensure the component is mounted before starting animation
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Small delay to ensure CSS transitions apply

    return () => clearTimeout(timer);
  }, []);

  // Array of brand logos using the imported local images
  const brandLogos = [
    BrandLogo1,
    BrandLogo2,
    BrandLogo3,
    BrandLogo4,
    BrandLogo5,
    BrandLogo6,
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 transition-opacity duration-1000 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#ff9100]">Collaborations</span>
        </h2>
        <p
          className={`text-2xl md:text-3xl font-semibold text-gray-800 transition-opacity duration-1000 delay-200 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          With Our Brands
        </p>
      </div>

      {/* Brand Logos Flex Container - Uses flexbox for wrapping and centering */}
      <div className="flex flex-wrap justify-center gap-8">
        {brandLogos.map((logoUrl, index) => (
          <div
            key={index}
            className={`flex justify-center items-center p-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg rounded-lg ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation
          >
            <img
              src={logoUrl}
              alt={`Brand Logo ${index + 1}`}
              // Fixed width and height for consistent sizing across all logos
              className="w-32 h-20 object-contain"
              onError={(e) => {
                // Fallback for broken image links, though less likely with local imports
                e.target.onerror = null; // Prevent infinite loop on error
                e.target.src = `https://placehold.co/150x60/CCCCCC/FFFFFF?text=Logo+Error`; // Fallback image
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCollaborations;
