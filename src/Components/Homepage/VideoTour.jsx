import React, { useEffect, useRef } from "react";
import Video from "../.././assets/Video.mp4";
export default function VideoTour() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            // Start video playback when in view
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log("Video autoplay prevented:", error);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-8 lg:px-16 opacity-0 transition-opacity duration-1000 ease-in"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Take A <span className="text-orange-500">Tour</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Choose from unique design concepts from multiple accomplished online
            interior designers.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.01]">
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="bg-orange-500 rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            poster="/api/placeholder/1920/1080"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Optional Call to Action */}
        <div className="mt-8 text-center">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            View More Projects
          </button>
        </div>
      </div>

      {/* CSS for the animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
      `}</style>
    </section>
  );
}
