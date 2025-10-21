import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Threads from "../gsap/Threads";

function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
        <Link to="/services" className="mt-4 text-lg underline">
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  // Get the specific component from our data object.
  // The variable MUST be in PascalCase for JSX to render it as a component.
  const ServiceContentComponent = service.component;

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-transparent flex items-center justify-center py-20">
      {/* Threads interactive background (consistent with the list page) */}
      <div className="absolute inset-0 z-0">
        <Threads 
          amplitude={1} 
          distance={0} 
          enableMouseInteraction={false} 
        />
      </div>

      {/* Foreground content wrapper */}
      <div className="relative z-10 p-10 text-white max-w-4xl w-full">
        <div className="bg-black/40 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          
          {/* Dynamically render the correct service content here */}
          {/* We pass the 'service' object as a prop so the content component has access to its data */}
          <ServiceContentComponent service={service} />
          
          <Link
            to="/services"
            className="inline-block mt-8 text-lg text-white hover:text-gray-300 transition-colors"
          >
            &larr; Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;