import AboutImg from "../../assets/AboutImg.png"
const AboutIntro = () => {
    
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-semibold mb-5 text-left">Where <span className="text-[#ff9100]"> Architecture</span> Meets <br /> the Human Spirit</h1>
      <img
        src={AboutImg}
        alt="Modern Bungalow"
        className="w-full shadow-md mb-8"
      />
    </div>
  );
};

export default AboutIntro;