import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A curated collection of our work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="group relative block overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              aria-label={`View project in ${item.category} category`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
