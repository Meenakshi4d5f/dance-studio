import React from "react";
import HipHopImg from "./HipHopImg.jpg"; // Uncomment and use a valid image

export default function HipHop() {
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-10">
        HipHop Classes
      </h1>

      {/* Uncomment below if you have an image */}
      {/* <img
        src={HipHopImg}
        alt="Hip Hop"
        className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg mb-10"
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-pink-200 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-purple-600 text-center mb-2">
              {cls.title}
            </h2>
            <div className="text-gray-700 text-center space-y-1">
              <p>
                <span className="font-semibold text-pink-500">Weekdays:</span>{" "}
                {cls.weekdays}
              </p>
              <p>
                <span className="font-semibold text-pink-500">Weekends:</span>{" "}
                {cls.weekends}
              </p>
              <p>
                <span className="font-semibold text-pink-500">Fee:</span>{" "}
                {cls.fee}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
