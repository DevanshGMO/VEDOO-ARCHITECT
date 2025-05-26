import { useEffect, useState } from "react";
import BrandLogo1 from "../../assets/BrandLogo1.png";
import BrandLogo2 from "../../assets/BrandLogo2.png";
import BrandLogo3 from "../../assets/BrandLogo3.png";
import BrandLogo4 from "../../assets/BrandLogo4.png";
import BrandLogo5 from "../../assets/BrandLogo5.png";
import BrandLogo6 from "../../assets/BrandLogo6.png";

const BrandCollaborations = () => {
  const [animate, setAnimate] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);
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
      <div className="flex flex-wrap justify-center gap-8">
        {brandLogos.map((logoUrl, index) => (
          <div
            key={index}
            className={`flex justify-center items-center p-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg rounded-lg ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }} 
          >
            <img
              src={logoUrl}
              alt={`Brand Logo ${index + 1}`}
              className="w-32 h-20 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/150x60/CCCCCC/FFFFFF?text=Logo+Error`; 
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCollaborations;
