import Home1 from "../../assets/Home1.png";
import Home2 from "../../assets/Home2.png";
import Home3 from "../../assets/Home3.png";
import Drawing1 from "../../assets/Drawing.png";
import Drawing2 from "../../assets/Drawing1.png";
import Img from "../../assets/Testimonials.png";


const LuxuryResidenceSection = () => {

  const interiorImages = [
    {
      src: Home1,
      alt: "Modern living room with wooden floors and minimalist decor",
    },
    {
      src: Home2,
      alt: "Contemporary kitchen with a large island and open concept layout",
    },
    {
      src: Home3,
      alt: "Luxury kitchen with dark cabinets, modern appliances, and elegant lighting",
    },
  ];


  return (
    <>
    
     <div className="container mx-auto min-h-screen bg-white p-4 sm:p-6 md:p-8 font-sans mt-16">
      <header className="text-3xl md:text-5xl font-bold text-[#052536] md:leading-tight text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Luxury Residence Living Room
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff9100] mt-2">
          Interior Design
        </h2>
      </header>

      <section className="mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 lg:w-2/5 max-w-2xl shadow-sm">
            <img
              src={Drawing1}
              alt="Architectural Floor Plan Drawing"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 max-w-2xl shadow-sm">
            <img
              src={Drawing2}
              alt="Architectural Elevation Drawing"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {interiorImages.map((image, index) => (
            <div
              key={index}
              className="shadow-md overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
      <blockquote className="text-lg sm:text-xl text-gray-800 max-w-4xl mx-auto">
        “My designer truly brought our vision to life. Every detail felt personal, and the team’s support made the whole process seamless and enjoyable.”
      </blockquote>

      <div className="mt-6 flex items-center justify-center gap-4">
        <img
          src={Img}
          alt="Adam Gham"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-900">ADAM GHAM</p>
          <p className="text-xs text-gray-600">Managing Director</p>
        </div>
      </div>
    </div>
    </div>
    
    
    </>
  )
}

export default LuxuryResidenceSection