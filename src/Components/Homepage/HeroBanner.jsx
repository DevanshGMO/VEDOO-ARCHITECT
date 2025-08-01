// src/components/HeroBanner.jsx
import React, { useState, useEffect } from "react";
import banner1 from "../../assets/Home.jpg";
import banner2 from "../../assets/Home2.jpg";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: banner1,
    heading: ["Innovative Spaces", "Intelligent Solutions", "Inspired Living"],
    text: "At Vedoo Architect, we blend smart design with innovation to create spaces that elevate how you live, work, and dream. From interiors to virtual site monitoring.",
    cta: { text: "Explore more", link: "#" },
  },
  {
    image: banner2,
    heading: ["Modern Aesthetics", "Timeless Design", "Functional Comfort"],
    text: "We prioritize form and function, delivering architectural solutions that stand the test of time.",
    cta: { text: "Explore more", link: "#" },
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl flex flex-col justify-center h-full text-left text-white">
                {slide.heading.map((line, i) => (
                  <h2
                    key={i}
                    className={`font-bold leading-tight ${
                      i === 0
                        ? "text-2xl sm:text-3xl md:text-5xl"
                        : "text-xl sm:text-2xl md:text-4xl"
                    } ${i === 1 ? "text-[#FF9100]" : ""}`}
                  >
                    {line}
                  </h2>
                ))}

                <p className="mt-4">{slide.text}</p>
              </div>
              <a
                href={slide.cta.link}
                className="mt-6 inline-flex items-center justify-center px-8 py-3 border border-white text-white font-semibold text-base hover:bg-white hover:text-black transition"
              >
                {slide.cta.text} <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
