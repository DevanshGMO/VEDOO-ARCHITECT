import React from 'react';
import kitchenImg from '../.././assets/kitchen.png'; // Place your image here

const KitchenIntro = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full relative">
        <img
          src={kitchenImg}
          alt="Modern Kitchen"
          className="w-full h-full object-cover"
        />
        {/* Area Badge */}
        <div className="absolute bottom-0 right-0 bg-[#FF9100] text-white px-4 py-3 text-right">
          <div className="text-2xl font-bold leading-none">1430</div>
          <div className="text-xs uppercase tracking-wider">Area Sqft</div>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full bg-[#052536] text-white flex items-center px-6 md:px-16 py-12 md:py-0">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Kitc<span className="text-[#FF9100]">hen</span>
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            At the intersection of elegance and authenticity, we create homes that transcend time.
            Each residence is a masterful composition of thoughtful design, refined materials, and enduring character —
            not merely built, but crafted to become a lasting legacy.
            From architectural detailing to curated interiors, every element speaks to a deep respect for tradition and a bold vision for modern living.
            This is not just luxury — this is timeless distinction, made to be lived in and loved for generations.
          </p>
          <button className="bg-[#FF9100] hover:bg-orange-600 transition-colors px-6 py-3 text-white font-semibold text-sm rounded">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default KitchenIntro;
