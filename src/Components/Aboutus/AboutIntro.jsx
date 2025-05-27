import { useEffect, useState } from "react";
import AboutImg from "../../assets/AboutImg.png";

const AboutIntro = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 text-left">
        Where <span className="text-[#ff9100]">Architecture</span> Meets <br /> the Human Spirit
      </h1>
      <img
        src={AboutImg}
        alt="Modern Bungalow"
        className="w-full h-auto shadow-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/1200x600/CCCCCC/FFFFFF?text=Image+Not+Found`;
        }}
      />
    </div>
  );
};

export default AboutIntro;
