import React from "react";

const workshopData = [
  {
    artist: "Kiana Brown",
    song: "On My Mama",
    duration: "90 minutes",
    date: "August 5, 2025",
    day: "Saturday",
  },
  {
    artist: "Alaxender Noel",
    song: "Feel the Beat",
    duration: "75 minutes",
    date: "August 7, 2025",
    day: "Monday",
  },
  {
    artist: "Akanksha Sharma",
    song: "Desi Groove",
    duration: "60 minutes",
    date: "August 9, 2025",
    day: "Wednesday",
  },
  {
    artist: "Nidhi Kapoor",
    song: "Grace in Motion",
    duration: "80 minutes",
    date: "August 12, 2025",
    day: "Saturday",
  },
  {
    artist: "Ray Diaz",
    song: "Rhythm Riot",
    duration: "100 minutes",
    date: "August 15, 2025",
    day: "Tuesday",
  },
  {
    artist: "Leila Singh",
    song: "Soulful Steps",
    duration: "90 minutes",
    date: "August 18, 2025",
    day: "Friday",
  },
];

export default function Workshops() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10">Upcoming Workshops</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {workshopData.map((workshop, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-pink-300 transition-transform hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-2 text-center">{workshop.artist}</h2>
            <p className="text-md text-gray-600 text-center italic mb-4">"{workshop.song}"</p>

            <div className="space-y-2 text-sm text-gray-700 font-medium">
              <p>
                <span className="text-pink-500 font-semibold">Duration:</span> {workshop.duration}
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Date:</span> {workshop.date}
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Day:</span> {workshop.day}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
