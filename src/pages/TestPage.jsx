import React from "react";
import DotGrid from "../gsap/DotGrid"; // adjust path as needed

function TestPage() {
  return (
    <div className="w-full h-screen bg-black relative">
      <DotGrid
        className="absolute inset-0"
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}

export default TestPage;
