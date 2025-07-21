import React, { useState } from "react";
import whatsappIcon from "./whatsappIcon.jpg";
import instagramIcon from "./instagramIcon.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [showClassesDropdown, setShowClassesDropdown] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const toggleClassesDropdown = () => {
    setShowClassesDropdown((prev) => !prev);
  };

  const closeModal = () => {
    setShowDemoModal(false);
  };

  return (
    <>
      <nav className="flex flex-col items-center px-6 py-4 bg-yellow-500 shadow-md relative z-50">
        <div className="flex justify-between items-center w-full max-w-7xl">
          <div className="flex-1"></div>

          {/* Center Navigation */}
          <div className="flex gap-8 justify-center flex-1 items-center relative">
            <Link to="/" className="font-semibold hover:text-yellow-500">
              Home
            </Link>

            <Link to="/workshops" className="font-semibold hover:text-yellow-500">
              Workshops
            </Link>

            {/* Classes Dropdown */}
            <div className="relative">
              <button
                onClick={toggleClassesDropdown}
                className="font-semibold hover:text-yellow-500 focus:outline-none"
              >
                Classes
              </button>
              {showClassesDropdown && (
                <div className="absolute top-10 left-0 bg-black border rounded shadow-md p-2 z-50 w-44">
                  <ul className="space-y-1">
                    {["hiphop", "contemporary", "bollywood", "freestyle", "classical"].map((type) => (
                      <li key={type}>
                        <Link
                          to={`/classes/${type}`}
                          className="block px-4 py-2 hover:bg-yellow-500"
                          onClick={() => setShowClassesDropdown(false)}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8 text-sm text-gray-700 flex-1 justify-end">
            {/* Contact Us */}
            <div
              className="relative"
              onMouseEnter={() => setShowContactInfo(true)}
              onMouseLeave={() => setShowContactInfo(false)}
            >
              <button className="hover:text-yellow-500 focus:outline-none font-semibold">Contact Us</button>
              {showContactInfo && (
                <div className="absolute top-10 left-0 bg-white border rounded shadow-md z-50 flex flex-col items-start space-y-4 py-4 pr-8 pl-0">
                  <a
                    href="https://www.instagram.com/DanceUpOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-yellow-500 pl-4"
                  >
                    <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                    <span>@DanceUpOfficial</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-yellow-500 pl-4"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-6 whitespace-nowrap" />
                    <span className="whitespace-nowrap">+91 98765 43210</span>
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
              <button className="font-semibold hover:text-yellow-500 focus:outline-none flex items-center gap-1">
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

        {/* Book Demo Button */}
       
      </nav>
       <div className="mt-6 fixed bottom-6 right-8 font=semi-bold">
          <button
            onClick={() => setShowDemoModal(true)}
            className="bg-yellow-500 hover:bg--600 text-black font-bold py-6 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Book a Demo Class
          </button>
        </div>
      

      {/* Demo Class Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-yellow-500 rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-400 hover:text-black-500"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-black-600 mb-4 text-center">Book a Demo Class</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-500"
              />
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-500"
              />
              <select
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-500"
              >
                <option value="">Select Class</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Bollywood">Bollywood</option>
                <option value="Freestyle">Freestyle</option>
                <option value="Classical">Classical</option>
              </select>
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-black transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}