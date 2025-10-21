import React from "react";

// The 'service' prop contains all data for this service (title, description, etc.)
function FilmmakingContent({ service }) {
  return (
    <>
      <h1 className="text-5xl font-bold mb-4">
        <span className="mr-4">{service.icon}</span>
        {service.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        {service.description}
      </p>
      <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
        <div className="aspect-w-16 aspect-h-9">
          {/* You can embed a YouTube/Vimeo showreel here */}
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default FilmmakingContent;