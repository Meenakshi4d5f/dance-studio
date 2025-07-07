import React, { useState } from "react";
import whatsappIcon from "./whatsappIcon.jpg";   // Adjust path as needed
import instagramIcon from "./instagramIcon.webp"; // Adjust path as needed
import { Link } from "react-router-dom";


export default function Navbar() {
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLocationInfo, setShowLocationInfo] = useState(false);

  return (
    <nav className="flex flex-col items-center px-6 py-4 bg-white shadow-md"> {/* Changed to flex-col and items-center */}

      {/* Central Logo and Subtitle Section */}
      

      {/* Main Navigation Links & Right-aligned Section */}
      <div className="flex justify-between items-center w-full max-w-7xl"> {/* New wrapper for main nav items */}

        {/* Placeholder for Left-aligned content if any, otherwise empty */}
        <div className="flex-1"></div> {/* Occupy space on the left */}

        {/* Main Navigation Links (Workshops, Classes) - Central portion */}
        <div className="flex gap-8 justify-center flex-1"> {/* Centered within its flex-1 container */}
          {/* Workshops */}
          <div className="relative">
  <button
    onClick={() => setShowWorkshops(!showWorkshops)}
    
    className="font-semibold hover:text-pink-500 focus:outline-none"
  >
    Classes
  </button>

  {showWorkshops && (
    <div className="absolute top-10 left-0 bg-white border rounded shadow-md p-2 z-50">
      <ul className="space-y-1">
        <li><Link to="/classes/hiphop" className="hover:text-pink-500">Hip Hop</Link></li>
        <li><Link to="/classes/contemporary" className="hover:text-pink-500">Contemporary</Link></li>
        <li><Link to="/classes/bollywood" className="hover:text-pink-500">Bollywood</Link></li>
        <li><Link to="/classes/freestyle" className="hover:text-pink-500">Freestyle</Link></li>
        <li><Link to="/classes/classical" className="hover:text-pink-500">Classical</Link></li>
      </ul>
    </div>
  )}
</div>


          {/* Classes */}
          <div
            className="relative"
            onMouseEnter={() => setShowClasses(true)}
            onMouseLeave={() => setShowClasses(false)}
          >
            <button className="font-semibold hover:text-pink-500">Workshops</button>
            {showClasses && (
              <div className="absolute top-10 left-0 bg-white border rounded shadow-md p-2 z-50">
                <ul className="space-y-1">
                  <li className="hover:text-pink-500 cursor-pointer whitespace-nowrap">All workshops</li>
                  <li className="hover:text-pink-500 cursor-pointer">Alaxender-Noel</li>
                  <li className="hover:text-pink-500 cursor-pointer">Akanksha-Sharma</li>
                  <li className="hover:text-pink-500 cursor-pointer">Nidhi</li>

                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right-aligned Section: Contact Us & Location */}
        <div className="flex items-center gap-8 text-sm text-gray-700 flex-1 justify-end"> {/* Use justify-end */}

          {/* Contact Us Button and Info */}
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
                {/* Instagram Link with Icon */}
                <a
                  href="https://www.instagram.com/DanceUpOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-pink-500 pl-4"
                >
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                  <span className="nowhite-space">@DanceUpOfficial</span>
                </a>

                {/* WhatsApp Link with Icon */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-pink-500 pl-4"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-6" />
                  <span className="whitespace-nowrap">+91 98765 43210</span>
                </a>
              </div>
            )}
          </div>

          {/* Location Button and Info */}
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
                <span>Dance-up, Behind Brand Factory, 2nd cross, Marathahalli, Bangalore-37, India</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline styles for the super-logo-text */}
      {/* You'd typically put this in your global CSS file (e.g., index.css or globals.css for Tailwind) */}
      <style jsx>{`
        .super-logo-text {
          font-family: 'Arial Black', sans-serif; /* Or any bold font you prefer */
          font-size: 5rem; /* Adjust as needed, larger than h1 */
          font-weight: 900; /* Extra bold */
          text-align: center;
          color: transparent; /* Make text transparent for the fill */
          background-image: linear-gradient(to right, #FF69B4, #8A2BE2); /* Pink to Purple Fill */
          -webkit-background-clip: text; /* Clip background to text shape */
          background-clip: text; /* Standard for clipping background to text */
          -webkit-text-stroke: 2px #FF69B4; /* Pink border */
          /* Consider a second stroke for purple if desired, but this gets complex */
          /* For two colors, often two overlapping text elements or SVG is used */
          /* Let's stick to a single pink border for simplicity as requested */
          letter-spacing: 0.05em; /* Optional: slightly spaced letters */
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .super-logo-text {
            font-size: 3rem; /* Smaller on mobile */
            -webkit-text-stroke: 1px #FF69B4; /* Thinner border */
          }
        }
      `}</style>
    </nav>
  );
}