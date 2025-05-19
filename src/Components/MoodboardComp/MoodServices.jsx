    import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MoodServices() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0.1)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  // Room types data
  const roomTypes = [
    {
      icon: "🏠", // Using emoji as placeholder for actual SVG icon
      title: "Kitchen",
      description: "Vedoo designs modern, functional kitchens blending elegance and innovation with remote precision to elevate your everyday living.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      buttonBg: "bg-[#ff9800]"
    },
    {
      icon: "🛋️", // Using emoji as placeholder for actual SVG icon
      title: "Living Room",
      description: "Vedoo designs modern, functional kitchens blending elegance and innovation with remote precision to elevate your everyday living.",
      bgColor: "bg-[#052536]",
      textColor: "text-white",
      buttonBg: "bg-[#ff9800]"
    },
    {
      icon: "🛏️", // Using emoji as placeholder for actual SVG icon 
      title: "Bedroom",
      description: "Vedoo designs serene, functional bedrooms blending comfort with remote precision to create personalized spaces for rest and rejuvenation.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      buttonBg: "bg-[#ff9800]"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}  
        >
          <span className="text-[#052536]">Types Of </span>
          <span className="text-[#ff9800]">Mood We Offer</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              className={`${room.bgColor} border border-gray-100 rounded-sm overflow-hidden flex flex-col p-6 h-full`}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 flex items-center justify-center ${room.title === "Living Room" ? "text-[#ff9800]" : "text-[#ff9800]"}`}>
                  {room.title === "Kitchen" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6h16v12H4z"></path>
                      <path d="M4 10h16"></path>
                      <path d="M8 6V4"></path>
                      <path d="M16 6V4"></path>
                      <path d="M12 10v6"></path>
                    </svg>
                  )}
                  {room.title === "Living Room" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                      <path d="M4 16h16"></path>
                      <path d="M8 8V5c0-1 1-2 2-2h4c1 0 2 1 2 2v3"></path>
                    </svg>
                  )}
                  {room.title === "Bedroom" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 18V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z"></path>
                      <path d="M4 14h16"></path>
                      <path d="M8 10v4"></path>
                      <path d="M16 10v4"></path>
                    </svg>
                  )}
                </div>
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${room.textColor}`}>{room.title}</h3>
              
              <p className={`text-sm ${room.title === "Living Room" ? "text-gray-300" : "text-gray-600"} mb-6 flex-grow`}>
                {room.description}
              </p>
              
              <motion.button 
                className={`${room.buttonBg} text-white py-2 px-6 text-sm font-medium self-start uppercase`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                READ MORE
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}