import { useEffect, useRef } from "react";
import Video from "../.././assets/VideoTwo.mp4";

export default function VideoTour() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log("Video autoplay prevented:", error);
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
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
      className="w-full py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 opacity-0 transition-opacity duration-1000 ease-in"
    >
      <div className="container mx-auto px-0 md:px-0 lg:px-0">
        <div className="text-center mb-8 md:mb-12 px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Take A <span className="text-[#FF9100]">Tour</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Choose from unique design concepts from multiple accomplished online
            interior designers.
          </p>
        </div>

        <div className="relative w-full aspect-video overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.005]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"></div>

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            poster="https://via.placeholder.com/1920x1080?text=Video+Poster"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
