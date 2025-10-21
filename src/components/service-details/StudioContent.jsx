import React from "react";

function StudioContent({ service }) {
  const features = [
    { icon: "🟩", name: "Cyclorama Green Screen" },
    { icon: "💡", name: "Professional Lighting Grid" },
    { icon: "🎤", name: "High-Quality Audio Gear" },
    { icon: "🛋️", name: "Client Lounge & Changing Room" },
    { icon: "💨", name: "Air Conditioned Space" },
    { icon: "⚡", name: "High-Speed Wi-Fi" },
  ];

  return (
    <>
      <h1 className="text-5xl font-bold mb-4">
        <span className="mr-4">{service.icon}</span>
        {service.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        {service.description}
      </p>

      <h3 className="text-2xl font-semibold text-white mb-6">Studio Features & Amenities</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-center gap-4 border border-white/10 p-4 rounded-lg">
            <span className="text-2xl">{feature.icon}</span>
            <span className="font-medium text-white">{feature.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center bg-white/5 py-8 px-6 rounded-lg">
        <h4 className="text-2xl font-bold text-white mb-2">Ready to Create?</h4>
        <p className="text-gray-300 mb-6">Our studio is the perfect canvas for your next project. Contact us for rates and availability.</p>
        <a 
          href="mailto:contact@yourstudio.com" // Replace with your actual contact email
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors duration-300"
        >
          Inquire Now
        </a>
      </div>
    </>
  );
}

export default StudioContent;