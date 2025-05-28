import { motion } from "framer-motion";
import Kitchen from "../../assets/Kitchen.png"; 

const KitchenComponent = () => {
     const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageScale = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
  <>
  
   <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:px-8 md:px-12 lg:px-20">
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-24 lg:gap-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <motion.div
          className="w-full md:w-1/2 space-y-5 md:space-y-8 text-left md:text-left mb-10 md:mb-0"
          variants={slideIn}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Kit</span>
            <span className="text-amber-500">chen</span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            At the intersection of elegance and authenticity, we create homes that transcend time. Each residence is a masterful composition of thoughtful design, refined materials, and enduring character not merely built, but crafted to become a lasting legacy. From architectural detailing to curated interiors, every element speaks to a deep respect for tradition, and a bold vision for modern living. This is not just luxury; this is timeless distinction, made to be lived in and loved for generations.
          </p>

          <motion.button
            className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition rounded-none self-center md:self-start"
            whileHover="hover"
            variants={buttonHover}
          >
            EXPLORE NOW
            <svg
              className="ml-2 -mr-1 h-4 w-4"
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
        <motion.div
          className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] relative overflow-hidden"
          variants={imageScale}
        >
          <img
            src={Kitchen}
            alt="Interior kitchen design"
            className="w-full h-full object-cover rounded-none"
          />
        </motion.div>
      </motion.div>
    </div>
  </>
  )
}

export default KitchenComponent