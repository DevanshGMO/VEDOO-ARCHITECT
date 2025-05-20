import React, { useState } from 'react';
import Mood1 from "../.././assets/Mood1.png";
import Mood2 from "../.././assets/Mood2.png";
export default function DesignMoodboard() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleSelectDesign = (design) => {
    setSelectedDesign(design);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Design Starts With A <span className="text-orange-500">Feeling</span>
          </h2>
          <p className="text-lg text-gray-700">
            Select Your Choice Of <span className="text-orange-500">Design</span>
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-6">
        
          <div 
            className={`relative w-full md:w-2/5 cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${selectedDesign === 'minimal' ? 'ring-4 ring-orange-500' : ''}`}
            onClick={() => handleSelectDesign('minimal')}
          >
            <img 
              src={Mood1}
              alt="Minimal modern kitchen design" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white font-bold text-lg z-10 my-4 md:my-0">
            OR
          </div>
          <div 
            className={`relative w-full md:w-2/5 cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${selectedDesign === 'traditional' ? 'ring-4 ring-orange-500' : ''}`}
            onClick={() => handleSelectDesign('traditional')}
          >
            <img 
              src={Mood2}
              alt="Traditional functional kitchen design" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <button 
            className={`px-8 py-3 bg-orange-500 text-white font-medium rounded flex items-center justify-center transition-all duration-300 ${
              selectedDesign ? 'hover:bg-orange-600' : 'opacity-70 cursor-not-allowed'
            }`}
            disabled={!selectedDesign}
          >
            NEXT
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}