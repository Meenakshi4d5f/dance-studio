import React, { useState } from "react";

export default function HipHop() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const classes = [
    {
      title: "Kids - Beginners",
      weekdays: "Mon–Fri, 4–5 PM",
      weekends: "Sat–Sun, 10–11 AM",
      fee: "₹2000/month",
    },
    {
      title: "Kids - Advanced",
      weekdays: "Mon–Fri, 4–5 PM",
      weekends: "Sat–Sun, 10–11 AM",
      fee: "₹2800/month",
    },
    {
      title: "Adults - Beginners",
      weekdays: "Mon–Fri, 4–5 PM",
      weekends: "Sat–Sun, 10–11 AM",
      fee: "₹2500/month",
    },
    {
      title: "Adults - Advanced",
      weekdays: "Mon–Fri, 6–7 PM",
      weekends: "Sat–Sun, 5–6 PM",
      fee: "₹3500/month",
    },
  ];

  const closeModal = () => {
    setShowDemoModal(false);
  };

  return (
    <div className="relative min-h-screen py-12 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/freestyle1.jpeg" // Make sure this path is correct for your project structure
          alt="Dance Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">
          Contemporary Classes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl shadow-md p-6 border border-yellow-300
                         hover:shadow-xl             // Increased shadow for more depth
                         transition-all duration-300  // Ensure smooth transition
                         hover:scale-105              // Slightly increased scale (adjust as needed)
                         hover:-translate-y-2         // Lift element up by 8px on hover
                         transform                    // Ensures transform utilities are applied
              "
            >
              <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-2">
                {cls.title}
              </h2>
              <div className="text-yellow-100 text-center space-y-1">
                <p>
                  <span className="font-semibold text-yellow-300">Weekdays:</span>{" "}
                  {cls.weekdays}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Weekends:</span>{" "}
                  {cls.weekends}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Fee:</span>{" "}
                  {cls.fee}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book a Demo Button */}
      <div className="mt-6 fixed bottom-6 right-8 font-semibold z-20">
        <button
          onClick={() => setShowDemoModal(true)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          Book a Demo Class
        </button>
      </div>

      {/* Demo Class Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-black rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fadeIn border border-yellow-300">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-yellow-400 hover:text-yellow-500"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
              Book a Demo Class
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-yellow-300 bg-black text-white rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-yellow-300 bg-black text-white rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
              />
              <input
                type="date"
                className="w-full border border-yellow-300 bg-black text-white rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
              />
              <select
                className="w-full border border-yellow-300 bg-black text-white rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
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
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}