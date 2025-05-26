import { useState, useEffect } from 'react';
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img4 from "../../assets/Img4.png";
export default function LuxuryResidenceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src:Img1,
      alt: "Modern living room with wooden floors"
    },
    {
      src: Img2, 
      alt: "Contemporary kitchen with island"
    },
    {
      src: Img4,
      alt: "Luxury kitchen with dark cabinets"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 tracking-tight">
            Luxury Residence Living Room
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-orange-500 mb-8">
            Interior Design
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Architectural Drawings Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 hover:shadow-3xl transition-shadow duration-500">
            <div className="space-y-8">
              {/* Front Elevation */}
              <div className="group">
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-colors duration-300">
                  <div className="aspect-[3/1] bg-white rounded-lg shadow-inner flex items-center justify-center border border-slate-300">
                    <div className="text-center space-y-2">
                      <div className="w-full h-16 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-lg flex items-center justify-center">
                        <span className="text-slate-600 font-medium">Front Elevation Drawing</span>
                      </div>
                      <div className="flex justify-center space-x-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-8 h-12 bg-slate-400 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Elevation */}
              <div className="group">
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-colors duration-300">
                  <div className="aspect-[3/1] bg-white rounded-lg shadow-inner flex items-center justify-center border border-slate-300">
                    <div className="text-center space-y-2">
                      <div className="w-full h-16 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-lg flex items-center justify-center">
                        <span className="text-slate-600 font-medium">Side Elevation Drawing</span>
                      </div>
                      <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <div key={i} className="w-6 h-12 bg-slate-400 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interior Photos Gallery */}
        <div className={`mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === currentImageIndex ? 'ring-4 ring-orange-400 ring-opacity-60' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Image overlay with animation */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">
                    {index === 0 && "Living Room"}
                    {index === 1 && "Kitchen Island"}
                    {index === 2 && "Modern Kitchen"}
                  </h3>
                  <p className="text-sm opacity-90">
                    {index === 0 && "Elegant wooden flooring with natural lighting"}
                    {index === 1 && "Contemporary design with premium finishes"}
                    {index === 2 && "Luxury dark cabinetry with marble countertops"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-4xl mx-auto hover:shadow-3xl transition-shadow duration-500">
            <div className="relative">
              {/* Quote marks */}
              <div className="absolute -top-4 -left-4 text-6xl text-orange-300 font-serif">"</div>
              <div className="absolute -bottom-8 -right-4 text-6xl text-orange-300 font-serif rotate-180">"</div>
              
              <blockquote className="text-xl sm:text-2xl text-slate-700 font-light leading-relaxed mb-8 italic">
                My designer truly brought our vision to life. Every detail felt personal, and
                the team's support made the whole process seamless and enjoyable.
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">AG</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800 text-lg">ADAM GHAM</div>
                  <div className="text-orange-500 text-sm font-medium">Managing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}