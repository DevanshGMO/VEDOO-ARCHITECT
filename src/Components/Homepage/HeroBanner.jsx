import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Import images from assets folder
import House1 from "../.././assets/House1.png";
import House2 from "../.././assets/House2.png";
import House3 from "../.././assets/House3.png";

export default function HeroBanner() {
  <style>@import url('https://fonts.cdnfonts.com/css/enfonix');</style>;
  // Images for the banner using project assets
  const images = [
    {
      id: 1,
      src: House1,
      thumb: House1,
      alt: "Modern architectural home",
      title: "Luxury Residence",
      sqft: "3897",
    },
    {
      id: 2,
      src: House2,
      thumb: House2,
      alt: "Contemporary house design",
      title: "Modern Villa",
      sqft: "4250",
    },
    {
      id: 3,
      src: House3,
      thumb: House3,
      alt: "Elegant residential property",
      title: "Family Residence",
      sqft: "3150",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  // Function to handle image change with animation
  const changeImage = (index, dir) => {
    if (isAnimating) return;

    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  // Function to handle automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      changeImage(nextIndex, "right");
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Function to navigate to next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeImage(nextIndex, "right");
  };

  // Function to navigate to previous image
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(prevIndex, "left");
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    const dir = index > currentIndex ? "right" : "left";
    changeImage(index, dir);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center bg-white">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-wider enfonix">
              Innovative Spaces
            </h2>
            <h3 className="text-4xl font-bold tracking-wider enfonix">
              Intelligent
            </h3>
            <h3 className="text-4xl font-bold tracking-wider enfonix">
              Solutions
            </h3>
            <h2 className="text-4xl font-bold tracking-wider font-enfonix">
              Inspired Living
            </h2>

            <p className="text-gray-800 text-lg mt-6">
              At Vedoo Architect, we blend smart design with innovation to
              create spaces that elevate how you live, work, and dream. From
              interiors to virtual site monitoring, every detail reflects our
              vision for modern, inspired living.
            </p>

            <div className="mt-8">
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-800 transition duration-300">
                <span>VIEW PROJECTS</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4 mt-8">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => handleThumbnailClick(index)}
                  className={`cursor-pointer overflow-hidden transition-all duration-300 ${
                    currentIndex === index ? "border-2 border-orange-500" : ""
                  }`}
                  style={{ width: "76px", height: "76px" }}
                >
                  <img
                    src={image.thumb}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="relative aspect-video lg:aspect-auto lg:h-full">
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full z-10 hover:bg-white transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full z-10 hover:bg-white transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Main Image with Animation */}
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isAnimating
                    ? direction === "right"
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              />

              {/* Image Label/Info */}
              <div className="absolute bottom-4 right-4 bg-orange-500 text-white p-2 flex flex-col items-center">
                <span className="text-xl font-bold">
                  {images[currentIndex].sqft}
                </span>
                <span className="text-xs uppercase">area sqft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
