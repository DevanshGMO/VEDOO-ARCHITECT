import React from 'react'

const BottomTabline = () => {
  return (
    <div className="bg-[#052536] text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="mb-3 sm:mb-0">
            <p className="text-gray-300">VEDOO - Copyright © 2025 . All rights reserved.</p>
          </div>
          <div className="flex space-x-4 sm:space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Notice
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomTabline