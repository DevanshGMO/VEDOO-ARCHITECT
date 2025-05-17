import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 z-50 relative">
      <div className="flex items-center justify-around">

        <Link to="/">
          <img src={Logo} alt="Vedoo Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6 font-semibold text-sm text-slate-800">
          <Link to="/howitworks" className="hover:text-[#FF9100]">How It Works</Link>

          <div className="relative group">
            <Link to="/portfolio" className="hover:text-[#FF9100]">Portfolio</Link>
          </div>

          <Link to="/aboutus" className="hover:text-[#FF9100]">About Us</Link>
          <Link to="/contactus" className="hover:text-[#FF9100]">Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/moodboard">
            <button className="bg-[#FF9100] text-white font-medium px-4 py-2 rounded-md text-sm hover:bg-[#ff9800]">
              Moodboard
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#052536] text-white font-medium px-4 py-2 rounded-md text-sm hover:bg-slate-800">
              Login
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-3 px-2 font-semibold text-sm text-slate-800">
         <Link to="/howitworks" className="hover:text-[#FF9100]">How It Works</Link>

          <div>
             <Link to="/portfolio" className="hover:text-[#FF9100]">Portfolio</Link>
          </div>

          <Link to="/aboutus" className="hover:text-[#FF9100]">About Us</Link>
          <Link to="/contactus" className="hover:text-[#FF9100]">Contact Us</Link>
          <Link to="/moodboard">
            <button className="w-fit bg-[#FF9100] text-white font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#ff9800] mt-2">
              Moodboard
            </button>
          </Link>
          <Link to="/login">
            <button className="w-fit bg-[#052536] text-white font-semibold px-4 py-2 rounded-md text-sm hover:bg-slate-800">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
