import React from "react";
import { Link } from "react-router-dom";
import Threads from "../gsap/Threads";
import PixelTransition from "../gsap/PixelTransition"; // Make sure this path is correct
import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-transparent py-20">
      {/* Threads interactive background */}
      <div className="absolute inset-0 z-0">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 p-10 text-white max-w-6xl w-full mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        
        {/* Responsive Grid for Service Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <li key={service.id}>
              <Link to={`/services/${service.id}`} className="block group">
                <PixelTransition
                  firstContent={
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#111",
                        padding: "1.5rem", // Added padding for text
                        textAlign: "center"
                      }}
                    >
                      {/* Changed to an h3 for semantic meaning and larger text */}
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "2.25rem", // Increased font size
                          lineHeight: "1.2",   // Improved line height for multi-line titles
                          color: "#ffffff",
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='#ffffff'
                  animationStepDuration={0.4}
                  className="w-full h-80 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;