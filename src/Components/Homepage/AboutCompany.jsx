import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import Img from "../.././assets/Img3.png";
import { useNavigate } from "react-router-dom";


const AboutCompany = () => {

const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // Animation for section entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle video play functionality
  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Here you would typically trigger video playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

const navigate = useNavigate();
const handleAboutClick = () =>{
  navigate("/aboutus");
}
  

  return (
    <>
     <section className="w-full bg-[#052536] text-white overflow-hidden">
      <div 
        className={`max-w-6xl mx-auto px-4 py-12 md:py-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -left-3 -bottom-3 w-full h-full border-4 border-[#FF9100] transform transition-all duration-500 hover:translate-x-1 hover:translate-y-1"></div>
              
              {/* Main image */}
              <div className="relative overflow-hidden">
                <img 
                  src={Img}
                  alt="Modern architectural building" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
    
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 transform transition-all duration-500 hover:translate-x-2">
              <span className="block">About Company &</span>
              <span className="block mt-2">Our Services</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <div className="flex flex-wrap gap-4">

              <button
              onClick={handleAboutClick}
              className="bg-[#FF9100] hover:bg-orange-600 px-6 py-3 font-medium uppercase text-sm tracking-wider transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg">
                Read More
              </button>
              
              <button 
                onClick={handlePlayVideo}
                className="flex items-center gap-2 bg-transparent  px-6 py-3 font-medium uppercase text-sm tracking-wider transition-all duration-300 group"
              >
                <span className="h-8 w-8 rounded-full bg-[#FF9100] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={16} fill="white" className="ml-0.5" />
                </span>
                <span>Play Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default AboutCompany