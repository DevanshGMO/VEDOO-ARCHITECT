import { useEffect, useState } from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import Img from "../.././assets/Img3.png";
import Review1 from "../.././assets/Review1.png";
import Review2 from "../.././assets/Review2.png";
const testimonials = [
  {
    id: 1,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: Review1,
    rating: 5,
    quote: "If you want real marketing that works and effective implementation – mobile app's got you covered.",
  },
  {
    id: 2,
    name: 'Alex Smith',
    role: 'Digital Transformation Lead',
    image: Img,
    rating: 5,
    quote: "Vedoo’s design and functionality blew us away. Efficient and beautiful.",
  },
  {
    id: 3,
    name: 'Jane Doe',
    role: 'Growth Strategist',
    image: Review2,
    rating: 5,
    quote: "This platform transformed our business outreach and online presence. Highly recommended!",
  },
  {
    id: 4,
    name: 'Mark Taylor',
    role: 'Product Owner',
    image: Img,
    rating: 5,
    quote: "Absolutely brilliant! Vedoo delivered exactly what we needed.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + itemsPerSlide) % testimonials.length);
    }, 5000); // Every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const getCurrentTestimonials = () => {
    const items = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (current + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our <span className="text-orange-500">Client</span> Say
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
        {getCurrentTestimonials().map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl shadow-md border transition-all duration-500 bg-white"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <div className="flex items-center text-yellow-500 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <div className="flex items-center text-green-600 font-medium">
              <FaCheckCircle className="mr-2" />
              Verified
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              current / itemsPerSlide === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
