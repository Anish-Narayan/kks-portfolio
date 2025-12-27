import React from "react";
import { Scissors, MonitorPlay, Music } from "lucide-react";

export default function EditingContent() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div>
        <h3 className="text-3xl font-bold text-white mb-6">The Art of the Cut</h3>
        <p className="text-gray-300 leading-relaxed mb-8">
          Our Editing & Post-Production services transform raw footage and photos into polished, professional content. We specialize in video editing, reel creation, and album design, ensuring every project is visually appealing and engaging. Our team also provides color grading, motion graphics, audio enhancement, and special effects integration to enhance the overall impact. Whether it’s a wedding video, commercial, social media reel, or photo album, we focus on creativity, precision, and storytelling to deliver content that stands out.        </p>
      </div>

      {/* Feature List */}
      <div className="grid grid-cols-1 gap-4">
        {[
          { title: "Offline Editing", desc: "Structuring the narrative flow.", icon: <Scissors size={20} /> },
          { title: "Color Grading (DI)", desc: "Mood enhancement using DaVinci Resolve.", icon: <MonitorPlay size={20} /> },
          { title: "Sound Design", desc: "SFX, Foley, and final mixing.", icon: <Music size={20} /> },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-colors">
            <span className="text-cyan-500">{item.icon}</span>
            <div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-2xl border border-cyan-500/20">
        <h4 className="text-cyan-400 font-bold mb-2">Technical Delivery</h4>
        <p className="text-sm text-gray-300">
          We deliver in all required formats, from DCP for cinema projection to optimized codecs for Instagram and YouTube, ensuring zero loss in quality.
        </p>
      </div>
    </div>
  );
}