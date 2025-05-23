import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-900 py-12 px-4 md:px-12 lg:px-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Where <span className="text-orange-500">Architecture</span> Meets the Human Spirit
        </h2>
      </motion.div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <img
          src="/images/architecture-hero.jpg"
          alt="Modern house with water around"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-start"
      >
        <img
          src="/images/architecture-side.jpg"
          alt="Modern house with garden"
          className="w-full h-auto rounded-lg shadow-md"
        />

        <div className="flex flex-col justify-center">
          <p className="text-gray-700 mb-6">
            There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable. Great architecture is designed for people, not just for beauty. It prioritizes comfort and function, creating spaces that inspire connection and serve real human needs. More than just aesthetics, meaningful design reflects and enhances everyday life.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            <span className="text-orange-500">Design</span> is Everything
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">2D Drawings</p>
              <Progress value={93} className="h-2 bg-gray-200" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Architect Designs</p>
              <Progress value={70} className="h-2 bg-gray-200" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Moodboard</p>
              <Progress value={48} className="h-2 bg-gray-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
