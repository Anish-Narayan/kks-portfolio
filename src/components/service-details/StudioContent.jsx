import React from "react";
import { Mic, Box, Zap } from "lucide-react";

export default function StudioContent() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">The Creative Hub in Coimbatore</h3>
        <p className="text-gray-300">
          We provide a full range of creative studio services designed to bring your vision to life. From podcast production and model shoots to portrait sessions, portfolio creation, and commercial or product photography, our team focuses on lighting, composition, and storytelling to deliver high-quality visuals. We also specialize in kids and baby photography, capturing the joy and innocence of every moment. Every session is tailored to your needs, ensuring professional, engaging, and timeless results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-green-500">
          <Box className="text-green-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">Green Screen / Cyclorama</h4>
          <p className="text-sm text-gray-400 mt-2">Pre-lit infinity curves and chroma backgrounds for VFX work.</p>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-orange-500">
          <Mic className="text-orange-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">Audio Isolation</h4>
          <p className="text-sm text-gray-400 mt-2">Acoustically treated booths for voiceovers and podcasting.</p>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-cyan-500 sm:col-span-2">
          <Zap className="text-cyan-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">Lighting Grid</h4>
          <p className="text-sm text-gray-400 mt-2">Overhead rails with Aputure and Nanlite fixtures available for rent.</p>
        </div>
      </div>
    </div>
  );
}