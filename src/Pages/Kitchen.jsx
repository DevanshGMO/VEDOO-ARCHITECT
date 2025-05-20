import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import KitchenHome from ".././assets/KitchenHome.png"; 
const Kitchen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center leading-relaxed">
          {/* Text Content - Left Side on Desktop, Top on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center md:text-left space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
              Kitchen
            </h1>
            <p className="text-[#3F3F3F] text-base sm:text-sm md:text-xl leading-relaxed">
              At the intersection of elegance and authenticity, we create homes that transcend time. Each residence is a masterful composition of thoughtful design, refined materials, and enduring character – not merely built, but crafted to become a lasting legacy. From architectural detailing to curated interiors, every element speaks to a deep respect for tradition and a bold vision for modern living. This is not just luxury – this is timeless distinction, made to be lived in and loved for generations.
            </p>
          
              <button
                variant="outline"
                className="bg-[#052536] text-white
                           flex items-center gap-2 px-6 py-3 border"
              >
                CLICK TO PROCEED
                <ArrowRight className="w-4 h-4" />
              </button>

          </motion.div>

          {/* Image - Right Side on Desktop, Bottom on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
            className="shadow-2xl overflow-hidden" 
          >
            <img
              src={KitchenHome} 
              alt="Modern Kitchen Design"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
