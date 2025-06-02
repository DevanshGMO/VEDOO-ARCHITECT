import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/Logo.png';

const portfolioItems = [
  { label: 'Living Room Design Ideas', to: '/portfolio/living-room' },
  { label: 'Bedroom Design Ideas', to: '/portfolio/bedroom' },
  { label: 'Kitchen Design Ideas', to: '/portfolio/kitchen' },
  { label: 'Bathroom Design Ideas', to: '/portfolio/bathroom' },
  { label: 'Office/Workspace Design Ideas', to: '/portfolio/office' },
  { label: 'Kids/Nursery Room Design Ideas', to: '/portfolio/kids' },
  { label: 'Patio/Balcony Design Ideas', to: '/portfolio/patio' },
  { label: 'Full Interior Projects', to: '/portfolio/full-projects' },
  { label: 'Online Interior Designers', to: '/portfolio/designers' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsPortfolioOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsPortfolioOpen(false);
    }, 300);
  };

  // Helper class for the hover effect
  const hoverEffectClass = "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF9100] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 z-50 relative">
      <div className="flex items-center justify-evenly">
        <Link to="/">
          <img src={Logo} alt="Vedoo Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6 font-semibold text-sm text-slate-800">
          <Link to="/howitworks" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            How It Works
          </Link>

          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/portfolio"
              className={`hover:text-[#FF9100] flex items-center gap-1 ${hoverEffectClass}`}
            >
              Portfolio
              <svg
                className="w-3 h-3 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>

            {isPortfolioOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 shadow-lg py-2 z-50">
                {portfolioItems.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#FF9100] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/aboutus" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            About Us
          </Link>
          <Link to="/Pricing" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            Pricing
          </Link>
          <Link to="/contactus" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/moodboard">
            <button className="bg-[#FF9100] text-white font-medium px-4 py-2 text-sm hover:bg-[#ff9800]">
              Moodboard
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#052536] text-white font-medium px-4 py-2 text-sm hover:bg-slate-800">
              Login
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-3 px-2 font-semibold text-sm text-slate-800">
          <Link to="/howitworks" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            How It Works
          </Link>

          <div>
            <button
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              className="w-full flex justify-between items-center hover:text-[#FF9100] font-semibold"
            >
              <Link
                to="/portfolio"
                onClick={(e) => e.stopPropagation()}
                className={`${hoverEffectClass}`} 
              >
                Portfolio
              </Link>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isPortfolioOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isPortfolioOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-1">
                {portfolioItems.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-2 py-1 text-sm text-slate-700 hover:bg-[#FF9100] hover:text-white rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/aboutus" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            About Us
          </Link>
          <Link to="/Pricing" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            Pricing
          </Link>
          <Link to="/contactus" className={`hover:text-[#FF9100] ${hoverEffectClass}`}>
            Contact Us
          </Link>

          <Link to="/moodboard">
            <button className="w-full bg-[#FF9100] text-white font-semibold px-4 py-2 text-sm hover:bg-[#ff9800] mt-2">
              Moodboard
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full bg-[#052536] text-white font-semibold px-4 py-2 text-sm hover:bg-slate-800">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;