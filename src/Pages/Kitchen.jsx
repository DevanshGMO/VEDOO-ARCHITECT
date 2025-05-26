import { motion } from "framer-motion";
import Kitchen from "../assets/Kitchen.png";
export default function MoodboardSection() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 }, // Adjusted slide in from left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageScale = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8 font-sans ">
      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-none overflow-hidden flex flex-col md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <motion.div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-gray-900">Kit</span>
            <span className="text-amber-500">chen</span>{" "}
            {/* Changed to amber-500 as per new image */}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
            At the intersection of elegance and authenticity, we create homes
            that transcend time. Each residence is a masterful composition of
            thoughtful design, refined materials, and enduring character not
            merely built, but crafted to become a lasting legacy. From
            architectural detailing to curated interiors, every element speaks
            to a deep respect for tradition, and a bold vision for modern
            living. This is not just luxury; this is timeless distinction, made
            to be lived in and loved for generations.
          </p>
          <motion.button
            className="self-center md:self-start inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-none shadow-none text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300" // Removed rounded-full and shadow
            whileHover="hover"
            variants={buttonHover}
          >
            EXPLORE NOW
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] lg:min-h-[600px] relative overflow-hidden"
          variants={imageScale}
        >
          <img
            src={Kitchen}
            alt="Interior design with warm lighting"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
