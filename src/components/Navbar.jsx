import React, { useState } from "react";
import whatsappIcon from "./whatsappIcon.jpg";
import instagramIcon from "./instagramIcon.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [showClassesDropdown, setShowClassesDropdown] = useState(false);

  const toggleClassesDropdown = () => {
    setShowClassesDropdown(prev => !prev);
  };

  return (
    <nav className="flex flex-col items-center px-6 py-4 bg-white shadow-md relative z-50">
      <div className="flex justify-between items-center w-full max-w-7xl">
        {/* Empty left for spacing */}
        <div className="flex-1"></div>

        {/* Center Navigation */}
        <div className="flex gap-8 justify-center flex-1 items-center relative">
          <Link to="/" className="font-semibold hover:text-pink-500">
            Home
          </Link>

          <Link to="/workshops" className="font-semibold hover:text-pink-500">
            Workshops
          </Link>

          {/* Classes Dropdown */}
          <div className="relative">
            <button
              onClick={toggleClassesDropdown}
              className="font-semibold hover:text-pink-500 focus:outline-none"
            >
              Classes
            </button>
            {showClassesDropdown && (
              <div className="absolute top-10 left-0 bg-white border rounded shadow-md p-2 z-50 w-44">
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/classes/hiphop"
                      className="block px-4 py-2 hover:bg-pink-100"
                      onClick={() => setShowClassesDropdown(false)}
                    >
                      Hip Hop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/classes/contemporary"
                      className="block px-4 py-2 hover:bg-pink-100"
                      onClick={() => setShowClassesDropdown(false)}
                    >
                      Contemporary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/classes/bollywood"
                      className="block px-4 py-2 hover:bg-pink-100"
                      onClick={() => setShowClassesDropdown(false)}
                    >
                      Bollywood
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/classes/freestyle"
                      className="block px-4 py-2 hover:bg-pink-100"
                      onClick={() => setShowClassesDropdown(false)}
                    >
                      Freestyle
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/classes/classical"
                      className="block px-4 py-2 hover:bg-pink-100"
                      onClick={() => setShowClassesDropdown(false)}
                    >
                      Classical
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Contact & Location */}
        <div className="flex items-center gap-8 text-sm text-gray-700 flex-1 justify-end">
          {/* Contact Us */}
          <div
            className="relative"
            onMouseEnter={() => setShowContactInfo(true)}
            onMouseLeave={() => setShowContactInfo(false)}
          >
            <button className="hover:text-pink-500 focus:outline-none">
              Contact Us
            </button>
            {showContactInfo && (
              <div className="absolute top-10 left-0 bg-white border rounded shadow-md z-50 flex flex-col items-start space-y-4 py-4 pr-8 pl-0">
                <a
                  href="https://www.instagram.com/DanceUpOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-pink-500 pl-4"
                >
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                  <span>@DanceUpOfficial</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-pink-500 pl-4"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-6" />
                  <span>+91 98765 43210</span>
                </a>
              </div>
            )}
          </div>

          {/* Location */}
          <div
            className="relative"
            onMouseEnter={() => setShowLocationInfo(true)}
            onMouseLeave={() => setShowLocationInfo(false)}
          >
            <button className="font-semibold hover:text-pink-500 focus:outline-none flex items-center gap-1">
              <span>📍</span>
              <span>Location</span>
            </button>
            {showLocationInfo && (
              <div className="absolute top-10 right-0 bg-white border rounded shadow-md p-4 z-50 w-64 text-left">
                <span>
                  Dance-up, Behind Brand Factory, 2nd cross, Marathahalli, Bangalore-37, India
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gradient Logo Text Styling */}
      <style jsx>{`
        .super-logo-text {
          font-family: 'Arial Black', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          text-align: center;
          color: transparent;
          background-image: linear-gradient(to right, #FF69B4, #8A2BE2);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 2px #FF69B4;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .super-logo-text {
            font-size: 3rem;
            -webkit-text-stroke: 1px #FF69B4;
          }
        }
      `}</style>
    </nav>
  );
}
