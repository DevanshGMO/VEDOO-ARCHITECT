import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundImg from "./../assets/FooterBg.png";
import BottomTabline from "./BottomTabline";

const Footer = () => {
  return (
    <>
     <footer className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
          }}
        >
          <div className="absolute inset-0 bg-[#052536] opacity-90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-medium mb-6">CONTACT</h2>
              <div className="flex items-start mb-4">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm">
                  BMP 543, 1st Floor,
                  <br />
                  Nallapullappa Garden, Akkithimanahalli
                  <br />
                  (Opp Divyashree Chambers) Shanthinagar,
                  <br />
                  Bangalore - 560027,
                </p>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm">+91 97763 43829</p>
                  <p className="text-sm">+91 98447 41262</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm">arnav.eagle@gmail.Com</p>
                  <p className="text-sm">tambreniranjan5@gmail.Com</p>
                </div>
              </div>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-medium mb-6">OUR LINKS</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/howitworks" className="text-sm hover:underline">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-sm hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-sm hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" className="text-sm hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-medium mb-6">OUR SERVICES</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/kitchen" className="text-sm hover:underline">
                    Kitchen
                  </Link>
                </li>
                <li>
                  <Link to="/Livingroom" className="text-sm hover:underline">
                    Living Room
                  </Link>
                </li>
                <li>
                  <Link to="/bedroom" className="text-sm hover:underline">
                    Bedroom
                  </Link>
                </li>
                <li>
                  <Link to="/services/interior-design" className="text-sm hover:underline">
                    Interior Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-6">OTHER LINKS</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/moodboard" className="text-sm hover:underline">
                    Moodboard
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-sm hover:underline">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <BottomTabline />
    
    </>
  )
}

export default Footer