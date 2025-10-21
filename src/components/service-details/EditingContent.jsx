import React from "react";

function EditingContent({ service }) {
  const postProductionServices = [
    {
      icon: "✂️",
      title: "Creative Video Editing",
      description: "We piece together your story, focusing on pacing, narrative flow, and emotional impact to create a final cut that resonates."
    },
    {
      icon: "🎨",
      title: "Professional Color Grading",
      description: "Enhancing the mood and tone of your footage by meticulously adjusting color, contrast, and saturation for a cinematic look."
    },
    {
      icon: "🔊",
      title: "Sound Design & Mixing",
      description: "From dialogue cleanup to adding immersive sound effects and music, we ensure your video sounds as good as it looks."
    },
    {
      icon: "✨",
      title: "Motion Graphics & VFX",
      description: "Adding that extra layer of polish with animated titles, lower thirds, logo reveals, and subtle visual effects."
    }
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

      <h3 className="text-2xl font-semibold text-white mb-6">Our Post-Production Suite Includes:</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {postProductionServices.map((item) => (
          <div key={item.title} className="bg-white/5 p-6 rounded-lg">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EditingContent;