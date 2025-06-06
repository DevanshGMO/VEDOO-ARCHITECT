import { motion } from 'framer-motion';
import HouseImgOne from "../../assets/House5.png"
import HouseImgTwo from "../../assets/House6.png"
import HouseImgThree from "../../assets/House7.png"
import { useNavigate } from 'react-router-dom';

const MoodboardSection = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideIn = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const imageHover = {
    rest: { scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const handleExploreClick = () => {
    navigate('/MoodboardSelection');
  };

  return (
    <>
      <div className="bg-white font-sans">
        <motion.div
          className="container mx-auto px-4 py-12 md:py-16 lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <motion.div
              className="lg:w-2/5 flex flex-col justify-center"
              variants={slideIn}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                variants={slideIn}
              >
                <span className="text-gray-900">Mood</span>
                <span className="text-amber-500">board</span>
              </motion.h1>

              <motion.p
                className="text-gray-700 mb-8 leading-relaxed"
                variants={slideIn}
              >
                At the intersection of elegance and authenticity, we create homes that
                transcend time. Each residence is a masterful composition of thoughtful
                design, refined materials, and enduring character not merely built, but
                crafted to become a lasting legacy. From architectural detailing to
                curated interiors, every element speaks to a deep respect for tradition,
                and a bold vision for modern living. This is not just luxury; this is timeless
                distinction, made to be lived in and loved for generations.
              </motion.p>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
              >
                <motion.button
                  className="bg-gray-900 text-white px-6 py-3 inline-flex items-center group"
                  onClick={handleExploreClick}
                >
                  <span className="mr-2">EXPLORE NOW</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4"
              variants={fadeIn}
            >
              <motion.div
                className="md:row-span-2 relative overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={imageHover}
              >
                <img
                  src={HouseImgOne}
                  alt="Interior design with warm lighting"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                className="relative overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={imageHover}
              >
                <img
                  src={HouseImgTwo}
                  alt="Victorian style house with white exterior"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                className="relative overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={imageHover}
              >
                <img
                  src={HouseImgThree}
                  alt="Modern home with stone facade in winter"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default MoodboardSection;
