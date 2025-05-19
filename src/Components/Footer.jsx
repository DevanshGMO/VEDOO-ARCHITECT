import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import BackgroundImg from "./../assets/FooterBg.png";
import BottomTabline from "./BottomTabline";
export default function Footer() {
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

            {/* OUR LINKS Section */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-medium mb-6">OUR LINKS</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* OUR SERVICES Section */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-medium mb-6">OUR SERVICES</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Kitchen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Living Room
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Bedroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Interior Design
                  </a>
                </li>
              </ul>
            </div>

            {/* OTHER LINKS Section */}
            <div>
              <h2 className="text-xl font-medium mb-6">OTHER LINKS</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Moodboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <BottomTabline />
    </>
  );
}
