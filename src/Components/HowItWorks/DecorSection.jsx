import KitchenImg from "../../assets/KitchenDecor.png";
import LivingRoomImg from "../../assets/LivingRoomSlide.png";
import BedroomImg from "../../assets/bedroom.png";
import Vector from "../../assets/Vector.png";
const DecorSection = () => {
  const decorItems = [
    {
      title: "Kitchen Decor",
      image: KitchenImg,
      desc: "Tailored, stylish interiors that blend comfort, function, and personal taste.",
    },
    {
      title: "Living Room Decor",
      image: LivingRoomImg,
      desc: "Tailored, stylish interiors that blend comfort, function, and personal taste.",
    },
    {
      title: "Bedroom Decor",
      image: BedroomImg,
      desc: "Tailored, stylish interiors that blend comfort, function, and personal taste.",
    },
  ];

  return (
    <section className="py-16 px-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Professional <span className="text-[#ff9100]">Interior</span> <br />
          Design, Delivered <span className="text-[#ff9100]">Online.</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {decorItems.map((item, index) => (
            <div key={index} className="text-left group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-[-10px]"
                  />
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <img src={Vector} alt="" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecorSection;
