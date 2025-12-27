import React from "react";
import { Aperture, Layers, Sun } from "lucide-react";

export default function PhotographyContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <p className="text-xl text-gray-200 font-light border-l-4 border-cyan-500 pl-6 italic">
        "Photography is the pause button of life. We make sure that pause looks spectacular."
      </p>

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Editorial & Commercial</h3>
        <p className="text-gray-300 mb-6">
          KK’s Pixel, we specialize in photography and videography that brings your vision to life. From candid events and pre-wedding shoots to commercial and lifestyle projects, our team focuses on lighting, angles, motion, and emotion to deliver visuals that make a lasting impression.        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="bg-zinc-800 p-3 rounded-lg">
            <Aperture className="text-cyan-400" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg">Product Photography</h4>
            <p className="text-gray-400 text-sm">Macro details, 360-degree spins, and creative styling.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-zinc-800 p-3 rounded-lg">
            <Sun className="text-yellow-400" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg">Fashion & Lifestyle</h4>
            <p className="text-gray-400 text-sm">On-location shoots that capture the vibe of your brand.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-zinc-800 p-3 rounded-lg">
            <Layers className="text-pink-400" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg">High-End Retouching</h4>
            <p className="text-gray-400 text-sm">Frequency separation and color grading for flawless results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}