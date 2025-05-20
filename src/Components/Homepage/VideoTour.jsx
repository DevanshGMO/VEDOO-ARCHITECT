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
          } else {
            // Pause video when out of view (optional, but good for performance)
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section
      ref={sectionRef}
      // Adjusted padding for the section to give more room for the video to expand
      className="w-full py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 opacity-0 transition-opacity duration-1000 ease-in"
    >
      <div className="container mx-auto px-0 md:px-0 lg:px-0"> {/* Remove horizontal padding here for full-width video */}
        <div className="text-center mb-8 md:mb-12 px-4 md:px-8 lg:px-16"> {/* Add padding back for text content */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Take A <span className="text-[#FF9100]">Tour</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Choose from unique design concepts from multiple accomplished online
            interior designers.
          </p>
        </div>

        {/* Video Section - Adjusted for full width as per image */}
        {/*
          Removed: max-w-4xl mx-auto
          Added: rounded-none for full width edges, or keep rounded-lg if you want slight rounding at the very edges.
          The image shows it extending to the outer blue lines, suggesting it fills the container.
        */}
        <div className="relative w-full aspect-video overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.005]">
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="bg-[#FF9100] rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white cursor-pointer"
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
            // A common practice for posters is to use an image from your assets or a generated one.
            // For a production app, you'd replace this with an actual image.
            poster="https://via.placeholder.com/1920x1080?text=Video+Poster"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Optional Call to Action */}
        <div className="mt-8 text-center px-4 md:px-8 lg:px-16"> {/* Add padding back for button */}
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