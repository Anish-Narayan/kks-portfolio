import React from "react";
import { Smartphone, TrendingUp, Share2 } from "lucide-react";

export default function DigitalContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">Scroll-Stopping Strategy</h3>
          <p className="text-gray-300 mb-4">
            Attention spans are short. We create content that hooks viewers in the first 3 seconds. By analyzing current trends and platform algorithms, we produce vertical video content (Reels/Shorts) that drives engagement and growth.
          </p>
          <button className="text-cyan-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors">
            View Platform Stats →
          </button>
        </div>
        
        {/* Abstract representation of mobile content */}
        <div className="w-full md:w-1/3 bg-zinc-900 border-8 border-zinc-800 rounded-[2rem] h-64 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20"></div>
            <Smartphone className="text-white opacity-20" size={64} />
            <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="text-xs font-mono text-gray-500">9:16 VERTICAL</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-white/5 rounded-xl">
          <TrendingUp className="mx-auto text-green-400 mb-2" size={24} />
          <span className="block text-white font-bold text-sm">Viral Trends</span>
        </div>
        <div className="p-4 bg-white/5 rounded-xl">
          <Smartphone className="mx-auto text-blue-400 mb-2" size={24} />
          <span className="block text-white font-bold text-sm">Mobile First</span>
        </div>
        <div className="p-4 bg-white/5 rounded-xl">
          <Share2 className="mx-auto text-purple-400 mb-2" size={24} />
          <span className="block text-white font-bold text-sm">Social ROI</span>
        </div>
      </div>
    </div>
  );
}