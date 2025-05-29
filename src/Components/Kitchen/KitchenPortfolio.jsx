import { motion } from 'framer-motion'
import Image1 from "../../assets/KitchenBgOne.png";
import Image2 from '../../assets/KitchenBgTwo.png';
import Image3 from '../../assets/KitchenBgThree.png';

const KitchenPortfolio = () => {
    
  const portfolioImages = [
    { id: 1, src: Image1, alt: 'Modern Kitchen Design with Wooden Cabinets' },
    { id: 2, src: Image2, alt: 'Minimalist Kitchen Island with Pendant Lights' },
    { id: 3, src: Image3, alt: 'White Kitchen with Dark Island and Modern Appliances' },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  return (
    <>
    
     <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-gray-900">Our </span>
          <span className="text-amber-500">Portfolio Designs</span>
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {portfolioImages.map((image) => (
          <motion.div
            key={image.id}
            className="w-full h-80 sm:h-96 md:h-80 lg:h-96 overflow-hidden shadow-lg rounded-none"
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  )
}

export default KitchenPortfolio;