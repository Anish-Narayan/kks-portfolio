import React from "react";

function DigitalContent({ service }) {
  return (
    <>
      <h1 className="text-5xl font-bold mb-4">
        <span className="mr-4">{service.icon}</span>
        {service.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        {service.description}
      </p>

      <div className="border-t border-white/20 pt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Strategic Content for Modern Platforms</h3>
        <p className="text-gray-400 mb-6">We don't just create; we strategize. Our content is designed to stop the scroll and drive results on the platforms that matter most to your brand.</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full font-medium">Instagram Reels & Stories</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full font-medium">TikTok Videos</span>
          <span className="bg-red-500/20 text-red-300 px-4 py-1 rounded-full font-medium">YouTube Shorts & Features</span>
          <span className="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full font-medium">LinkedIn Video Ads</span>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">Types of Content We Create:</h3>
        <ul className="space-y-2 list-disc list-inside text-gray-300">
          <li>High-energy, short-form vertical videos</li>
          <li>Engaging product showcases and tutorials</li>
          <li>Authentic user-generated content (UGC) style ads</li>
          <li>Brand storytelling and mini-documentaries</li>
          <li>Animated explainers and infographics</li>
        </ul>
      </div>
    </>
  );
}

export default DigitalContent;