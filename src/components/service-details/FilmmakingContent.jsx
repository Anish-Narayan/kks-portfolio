import React from "react";
import { Camera, Film, Mic2 } from "lucide-react";

export default function FilmmakingContent() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* Intro Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Visual Storytelling Reimagined</h3>
        <p className="text-gray-300 leading-relaxed">
          We offer end-to-end filmmaking services to bring your creative vision to life. From pre-production planning and storyboarding to post-production editing, SFX, VFX, and sound design, our team ensures every project is crafted with precision and cinematic quality. We also specialize in commercial and corporate ads, creating engaging videos that promote your brand effectively. Whether it’s a short film, promotional video, or music video, we focus on storytelling, visual effects, and immersive audio to deliver a professional and memorable final product.	        </p>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Camera className="text-cyan-500 mb-4" size={32} />
          <h4 className="text-xl font-bold text-white mb-2">Pre-Production</h4>
          <p className="text-sm text-gray-400">
            Scriptwriting, storyboarding, location scouting, and casting. We handle the logistics so the vision remains pure.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Film className="text-purple-500 mb-4" size={32} />
          <h4 className="text-xl font-bold text-white mb-2">Cinematography</h4>
          <p className="text-sm text-gray-400">
            Visual storytelling driven by refined lighting, composition, and dynamic camera work.          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-cyan-500">
          <li>Narrative-driven commercial spots</li>
          <li>Documentary-style brand films</li>
          <li>High-end music videos</li>
          <li>Technical instructional films</li>
        </ul>
      </div>
    </div>
  );
}