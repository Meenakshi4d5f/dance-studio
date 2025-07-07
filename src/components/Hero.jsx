import React from "react";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-pink-100 via-pink-200 to-purple-100 px-10 py-20 pt-[25vh]"> {/* Changed justify-center to justify-start and added pt-[15vh] */}
      <h1 className="text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 drop-shadow-lg leading-none">
        DANCE UP
      </h1>

      <p className="text-3xl sm:text-4xl md:text-5xl font-semibold italic text-purple-800 mt-4 tracking-wide">
        Where grooves are born
      </p>
    </div>
  );
}