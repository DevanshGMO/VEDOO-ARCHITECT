// src/components/BeforeAfterSlider.jsx
import React, { useState } from 'react'
import blueprintImg from '../../assets/Blueprint.png'
import realImg from '../../assets/Moodslider.png'

const BeforeAfterSlider = () => {
  const [pos, setPos] = useState(50) 

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
        What’s the best that could happen?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore real client before &amp; after.
      </p>

      <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
        {/* After image (bottom) */}
        <img
          src={realImg}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (top), clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={blueprintImg}
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Draggable slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(e.target.value)}
          className="absolute bottom-4 left-0 w-full accent-[#FF9100] touch-none"
        />
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-[#FF9100] text-white font-semibold rounded-md hover:bg-[#e58500] transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
