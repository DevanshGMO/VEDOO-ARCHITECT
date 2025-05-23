import BgImg from "../../assets/HouseImg.png"; // Ensure this path is correct for your project structure.

const AboutSection = () => {
  return (
   
    <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[#052536] bg-opacity-50"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      >
         <section className="container mx-auto w-full min-h-screen">   
        <div className="min-h-screen flex flex-col justify-center items-start w-full">
          <header className="p-6 md:p-12 lg:p-20 w-full">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 rounded-lg">
                Online Interior Design For <br className="hidden sm:inline" />
                <span className="text-orange-400">Every Room And Budget.</span>
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 rounded-lg">
                Tailored, stylish interiors that blend comfort, function, and personal taste.Tailored, stylish interiors that blend comfort, function, and personal taste.
              </p>
              <button className="bg-[#ff9100] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                MOODBOARD
              </button>
            </div>
          </header>
        </div>
    </section>
      </div>
  );
};

export default AboutSection;