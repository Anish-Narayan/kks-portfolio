import React from "react";
import DarkVeil from "../gsap/DarkVeil"; // Make sure this path is correct

function Home() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* DarkVeil as animated background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      {/* Foreground content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-6 z-10 relative">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Welcome to KKS Pixel
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200">
          A creative production studio based in Coimbatore, crafting visuals that
          connect, inspire, and engage.
        </p>
      </div>
    </div>
  );
}

export default Home;
