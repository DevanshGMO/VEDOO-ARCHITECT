import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navWrapper = scrolled
    ? "fixed inset-x-0 top-0 bg-white shadow-md py-3 px-4 transition-all duration-300"
    : "absolute left-1/2 top-4 transform -translate-x-1/2 w-[98%] max-w-7xl bg-white shadow-lg py-4 px-6 transition-all duration-300";

  return (
    <nav className={`${navWrapper} z-50`}>
      <div className="flex items-center justify-around">
        <Link to="/">
          <img src={Logo} alt="Vedoo Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-800">
          <Link to="/howitworks" className="text-slate-800">
            How It Works
          </Link>
          <Link to="/aboutus" className="text-slate-800">
            About Us
          </Link>
          <Link to="/contactus" className="text-slate-800">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/moodboard">
            <button className="bg-[#FF9100] text-white font-medium px-4 py-2 text-sm">
              Moodboard
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#052536] text-white font-medium px-4 py-2 text-sm">
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
          <Link
            to="/howitworks"
            className="text-slate-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/aboutus"
            className="text-slate-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-slate-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <Link to="/moodboard" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full bg-[#FF9100] text-white font-semibold px-4 py-2 text-sm mt-2">
              Moodboard
            </button>
          </Link>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full bg-[#052536] text-white font-semibold px-4 py-2 text-sm">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
