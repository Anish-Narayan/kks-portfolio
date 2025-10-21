import React from "react";

function PhotographyContent({ service }) {
  return (
    <>
      <h1 className="text-5xl font-bold mb-4">
        <span className="mr-4">{service.icon}</span>
        {service.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        {service.description}
      </p>
      {/* Example of a custom photo gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="https://via.placeholder.com/400" alt="placeholder 1" className="rounded-lg" />
        <img src="https://via.placeholder.com/400" alt="placeholder 2" className="rounded-lg" />
        <img src="https://via.placeholder.com/400" alt="placeholder 3" className="rounded-lg" />
        <img src="https://via.placeholder.com/400" alt="placeholder 4" className="rounded-lg" />
        <img src="https://via.placeholder.com/400" alt="placeholder 5" className="rounded-lg" />
        <img src="https://via.placeholder.com/400" alt="placeholder 6" className="rounded-lg" />
      </div>
    </>
  );
}

export default PhotographyContent;