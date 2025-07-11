import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ModernHouse from "../../assets/ModernHouse.png";

const DesignShowcase = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true, // Animate only once
  });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  const progressData = [
    { label: '2D Drawings', percentage: 93, color: 'orange' },
    { label: 'Architect Designs', percentage: 70, color: 'blue' },
    { label: 'Moodboard', percentage: 48, color: 'green' },
  ];

  return (
    <div
      ref={ref}
      className={`container mx-auto px-4 py-2 md:py-6 transition-opacity duration-1000 ${
        hasAnimated ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ModernHouse}
            alt="Modern Luxury Home"
            className="w-full max-w-md md:max-w-none shadow-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:p-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-[#ff9100]">Design</span> is Everything
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            There are many variations of passages of available, but the majority have suffered alteration in some form,
            by which don't look even slightly believable. Great architecture is designed for people, not just for beauty.
            It prioritizes comfort and function, creating spaces that inspire connection and serve real human needs.
            More than just aesthetics, meaningful design reflects and enhances everyday life.
          </p>

          <div className="space-y-6">
            {progressData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium text-gray-800">{item.label}</span>
                  <span className="text-lg font-semibold text-gray-800">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: hasAnimated ? `${item.percentage}%` : '0%',
                      backgroundColor:
                        item.color === 'orange'
                          ? '#ff9100'
                          : item.color === 'blue'
                          ? '#052536'
                          : '#34B233',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;
