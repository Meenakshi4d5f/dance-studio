import React, { useState } from "react";
import whatsappIcon from "./whatsappIcon.jpg";   // Adjust path as needed
import instagramIcon from "./instagramIcon.webp"; // Adjust path as needed

export default function Navbar() {
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLocationInfo, setShowLocationInfo] = useState(false); // <--- New state for location

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-pink-600">Dance Inn</div>

      {/* Main Navigation Links (Workshops, Classes) */}
      <div className="flex gap-8">
        {/* Workshops */}
        <div
          className="relative"
          onMouseEnter={() => setShowWorkshops(true)}
          onMouseLeave={() => setShowWorkshops(false)}
        >
          <button className="font-semibold hover:text-pink-500">Workshops</button>
          {showWorkshops && (
            <div className="absolute top-10 left-0 bg-white border rounded shadow-md p-2 z-50">
              <ul className="space-y-1">
                <li className="hover:text-pink-500 cursor-pointer">Hip Hop</li>
                <li className="hover:text-pink-500 cursor-pointer">Contemporary</li>
                <li className="hover:text-pink-500 cursor-pointer">Bollywood</li>
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
          <button className="font-semibold hover:text-pink-500">Classes</button>
          {showClasses && (
            <div className="absolute top-10 left-0 bg-white border rounded shadow-md p-2 z-50">
              <ul className="space-y-1">
                <li className="hover:text-pink-500 cursor-pointer">Beginner</li>
                <li className="hover:text-pink-500 cursor-pointer">Intermediate</li>
                <li className="hover:text-pink-500 cursor-pointer">Advanced</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right-aligned Section: Contact Us & Location */}
      {/* Increased gap-6 to gap-8 slightly for better separation if desired */}
      <div className="flex items-center gap-8 text-sm text-gray-700"> {/* Adjusted gap here */}

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
            <div className="absolute top-10 left-0 bg-white border rounded shadow-md z-50 flex flex-col items-start space-y-4 py-2 pr-6 pl-1">
              {/* Instagram Link with Icon */}
              <a
                href="https://www.instagram.com/DanceUpOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-500 pl-4"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                <span>@DanceUpOfficial</span>
              </a>

              {/* WhatsApp Link with Icon */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-500 pl-4"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                <span className="whitespace-nowrap">+91 98765 43210</span>
              </a>
            </div>
          )}
        </div>

        {/* Location Button and Info - NEW SECTION */}
        <div
          className="relative"
          onMouseEnter={() => setShowLocationInfo(true)} // <-- Control visibility with hover
          onMouseLeave={() => setShowLocationInfo(false)} // <-- Hide on mouse leave
        >
          <button className="font-semibold hover:text-pink-500 focus:outline-none flex items-center gap-1"> {/* Added flex items-center gap-1 to button */}
            <span>📍</span> {/* Keep the icon in the button */}
            <span>Location</span> {/* Text for the button */}
          </button>

          {showLocationInfo && (
            <div className="absolute top-10 right-0 bg-white border rounded shadow-md p-4 z-50 w-64 text-left"> {/* Position and style */}
              <span>Dance-up, Behind Brand Factory, 2nd cross, Marathahalli, Bangalore-37, India</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}