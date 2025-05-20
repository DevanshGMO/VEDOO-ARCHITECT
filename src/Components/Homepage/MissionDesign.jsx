import React from 'react';
import Architect from "../.././assets/Architect.png";
const MissionDesign = () => {
  return (
    <div className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
     
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <img
            src={Architect}
            alt="Architecture"
            className="w-full h-full object-cover"
          />
      
        </div>


        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mission Is <span className="text-orange-500">Design</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Develop The Best Interior
          </h3>
          <p className="text-gray-600 mb-8">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form, by which don't look even
            slightly believable.
          </p>

          {/* Services List */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-md flex items-center justify-center mr-4">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-1">INTERIOR DESIGN</h4>
                <p className="text-gray-500 text-sm">
                  Tailored, stylish interiors that blend comfort, function, and
                  personal taste.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-md flex items-center justify-center mr-4">
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12-3V11m0 8h3m-6-1l-3-3L7 19h6m3-9V5m0 0h3m0-3h-3m-3 3H5m-2 3v16m0 0h2m0-3v-9m-3-3l3-3m0-6h3m-3 0h-3m-3 3v9" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-1">ARCHITECTURE</h4>
                <p className="text-gray-500 text-sm">
                  Innovative, sustainable structures designed with precision and
                  creativity.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-md flex items-center justify-center mr-4">
        
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-1">VIRTUAL SITE MONITORING</h4>
                <p className="text-gray-500 text-sm">
                  Real-time remote site tracking for seamless, transparent project
                  management.
                </p>
              </div>
            </div>
          </div>

     
          <button className="bg-gray-800 text-white py-3 px-6 rounded-md font-semibold mt-8 hover:bg-gray-700 transition duration-300 flex items-center">
            OUR SERVICES
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionDesign;