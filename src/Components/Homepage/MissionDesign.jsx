import { useEffect, useState } from 'react';
import { Home, Building, Monitor, ArrowRight } from 'lucide-react';
import ArchitectImg from "../.././assets/Architect.png"
const MissionDesign = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Home,
      title: 'INTERIOR DESIGN',
      description: 'Tailored, stylish interiors that blend comfort, function, and personal taste.',
    },
    {
      icon: Building,
      title: 'ARCHITECTURE',
      description: 'Innovative, sustainable structures designed with precision and creativity.',
    },
    {
      icon: Monitor,
      title: 'VIRTUAL SITE MONITORING',
      description: 'Real-time remote site tracking for seamless, transparent project management.',
    },
  ];
  
  return (
    <section className="font-inter bg-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="relative w-full lg:w-1/2 h-fit lg:h-[600px] overflow-hidden shadow-lg flex items-center justify-center">
            <img
              src={ArchitectImg}    
              alt="Axel Towers, Copenhagen"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-top-left text-[#FF9100] text-3xl md:text-4xl font-medium tracking-widest uppercase hidden lg:block">
              ARCHITECTURE
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#FF9100] text-xl font-medium tracking-widest uppercase lg:hidden">
              ARCHITECTURE
            </div>
          </div>
          <div className={`w-full lg:w-1/2 text-gray-800 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-semibold md:leading-tight mb-8">
              Mission Is <span className="text-[#FF9100]">Design</span>
              <br />
              Develop The Best
              <br />
              Interior
            </h2>
            <div className="grid gap-6 mb-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start p-4 shadow-md bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <Icon className="w-8 h-8 text-[#FF9100] transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="flex items-center bg-gray-800 text-white py-3 px-6 text-lg font-semibold hover:bg-[#ff9100] transition-colors duration-300 shadow-md">
              Explore More
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDesign;