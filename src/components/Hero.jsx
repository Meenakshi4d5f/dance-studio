
import React, { useState, useEffect } from "react";
const backgrounds = ['/bg3.jpeg', '/hiphopbg.jpeg', '/bollywoodbg.jpeg'];

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: `url(${backgrounds[currentBgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Let the Rhythm <span className="text-yellow-400">Move You</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-xl drop-shadow-md">
          Join our vibrant community and explore the art of dance with expert instructors and energetic sessions.
        </p>
        </main>
    </div>
  );
}